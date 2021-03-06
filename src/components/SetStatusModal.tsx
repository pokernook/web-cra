import "emoji-mart/css/emoji-mart.css";

import { BaseEmoji, Picker } from "emoji-mart";
import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Box, Button, Field, Text } from "theme-ui";

import {
  SetStatusMutationVariables,
  useClearStatusMutation,
  useMeQuery,
  useSetStatusMutation,
} from "../graphql";
import { FadeIn } from "./Animated";
import {
  ModalCard,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalPortal,
} from "./Modal";

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
      <ModalCard>
        <ModalClose onClose={onClose} />
        <ModalHeader>Set a status</ModalHeader>

        <ModalContent>
          <form id="status-form" onSubmit={handleSaveStatus}>
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
              sx={{ position: "absolute", p: 2, top: 82 }}
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

            <Box>
              {setStatusResult.error && (
                <FadeIn>
                  <Text variant="danger">
                    {setStatusResult.error.graphQLErrors[0]?.message ||
                      setStatusResult.error.networkError?.message}
                  </Text>
                </FadeIn>
              )}
            </Box>
          </form>
        </ModalContent>

        <ModalFooter>
          <Button variant="tertiary" mr={2} onClick={handleClearStatus}>
            Clear status
          </Button>

          <Button variant="secondary" type="submit" form="status-form">
            Save status
          </Button>
        </ModalFooter>
      </ModalCard>
    </ModalPortal>
  );
};
