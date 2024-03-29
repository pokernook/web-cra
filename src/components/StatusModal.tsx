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

type FormData = SetStatusMutationVariables;

export const StatusModal: FC<Props> = ({ onClose }) => {
  const [meQuery] = useMeQuery();
  const { data } = meQuery;
  const defaultEmoji = data?.me?.status?.emoji || "💬";
  const [, clearStatus] = useClearStatusMutation();
  const [setStatusResult, setStatus] = useSetStatusMutation();
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const { control, handleSubmit, register, getValues } = useForm<FormData>({
    defaultValues: {
      emoji: defaultEmoji,
      message: data?.me?.status?.message,
    },
  });

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
          <Box
            as="form"
            id="status-form"
            onSubmit={handleSaveStatus}
            sx={{ px: 3 }}
          >
            <Field
              label={`What's happening ${data?.me?.username}?`}
              type="text"
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
              {getValues("emoji")}
            </Button>

            <Controller
              name="emoji"
              control={control}
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
          </Box>
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
