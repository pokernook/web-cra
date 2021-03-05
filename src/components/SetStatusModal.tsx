import "emoji-mart/css/emoji-mart.css";

import { BaseEmoji, Picker } from "emoji-mart";
import { motion } from "framer-motion";
import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Box, Button, Card, Close, Field, Flex, Heading, Text } from "theme-ui";

import {
  SetStatusMutationVariables,
  useClearStatusMutation,
  useMeQuery,
  useSetStatusMutation,
} from "../graphql";
import { ModalPortal } from "./Modal";

type Props = {
  onClose: () => void;
};

export const SetStatusModal: FC<Props> = ({ onClose }) => {
  const [meQuery] = useMeQuery();
  const [, clearStatus] = useClearStatusMutation();
  const [setStatusResult, setStatus] = useSetStatusMutation();
  const {
    control,
    handleSubmit,
    register,
    watch,
  } = useForm<SetStatusMutationVariables>();
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

  const { data } = meQuery;

  const defaultEmoji = data?.me?.status?.emoji || "💬";
  const watchEmoji = watch("emoji", defaultEmoji);

  const handleClearStatus = () => {
    onClose();
    clearStatus();
  };

  const handleSaveStatus = handleSubmit(async (data) => {
    const result = await setStatus(data);
    if (!result.error) {
      onClose();
    }
  });

  return (
    <ModalPortal onClose={onClose} hasDimmedBackground>
      <Card variant="modal">
        <Close
          onClick={onClose}
          sx={{ position: "absolute", top: 10, right: 10 }}
        />
        <Heading>Set a status</Heading>

        <Box as="form" onSubmit={handleSaveStatus} mt={3}>
          <Field
            label={`What's happening ${data?.me?.username}?`}
            type="text"
            defaultValue={data?.me?.status?.message || ""}
            name="message"
            ref={register({ required: true })}
            spellCheck
            pl={4}
          />

          <Button
            variant="unstyled"
            type="button"
            onClick={() => setEmojiPickerOpen(true)}
            sx={{ position: "absolute", p: 1, top: 82 }}
          >
            {watchEmoji}
          </Button>

          <Controller
            name="emoji"
            control={control}
            defaultValue={defaultEmoji}
            render={(props) =>
              emojiPickerOpen ? (
                <ModalPortal onClose={() => setEmojiPickerOpen(false)}>
                  <Picker
                    title="Pick an emoji"
                    emoji="point_up"
                    native
                    theme="dark"
                    onSelect={(emoji: BaseEmoji) => {
                      props.onChange(emoji.native);
                      setEmojiPickerOpen(false);
                    }}
                  />
                </ModalPortal>
              ) : (
                <></>
              )
            }
          />

          <Box mt={1} mb={3}>
            {setStatusResult.error && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Text variant="danger">
                  {setStatusResult.error.graphQLErrors[0]?.message ||
                    setStatusResult.error.networkError?.message}
                </Text>
              </motion.div>
            )}
          </Box>

          <Flex sx={{ float: "right" }}>
            <Button
              variant="tertiary"
              type="button"
              mr={2}
              onClick={handleClearStatus}
            >
              Clear status
            </Button>

            <Button variant="secondary" type="submit">
              Save status
            </Button>
          </Flex>
        </Box>
      </Card>
    </ModalPortal>
  );
};
