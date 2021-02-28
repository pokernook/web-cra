import "emoji-mart/css/emoji-mart.css";

import { BaseEmoji, Picker } from "emoji-mart";
import { FC, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Field, Flex } from "theme-ui";

import {
  SetStatusMutationVariables,
  useClearStatusMutation,
  useMeQuery,
  useSetStatusMutation,
} from "../graphql";
import { useClickOutside } from "../hooks";
import { Modal } from "./Modal";

type Props = {
  open: boolean;
  closeModal: () => void;
};

export const SetStatusModal: FC<Props> = ({ open, closeModal }) => {
  const [meQuery] = useMeQuery();
  const [, clearStatus] = useClearStatusMutation();
  const [, setStatus] = useSetStatusMutation();
  const {
    control,
    handleSubmit,
    register,
    watch,
  } = useForm<SetStatusMutationVariables>();
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const emojiPickerRef = useRef(null);

  const { data } = meQuery;

  const defaultEmoji = data?.me?.status?.emoji || "💬";
  const watchEmoji = watch("emoji", defaultEmoji);

  const toggleEmojiPicker = () => setEmojiPickerOpen(!emojiPickerOpen);

  useClickOutside(emojiPickerRef, () => setEmojiPickerOpen(false));

  const handleClearStatus = async () => {
    await clearStatus();
    closeModal();
  };

  const handleSaveStatus = handleSubmit(async (data) => {
    const result = await setStatus(data);
    if (!result.error) {
      closeModal();
    }
  });

  // TODO: Display graphql errors
  return (
    <Modal title="Set a status" open={open} closeModal={closeModal}>
      <form onSubmit={handleSaveStatus}>
        <Field
          label={`What's happening ${data?.me?.username}?`}
          type="text"
          defaultValue={data?.me?.status?.message || ""}
          name="message"
          ref={register({ required: true })}
          spellCheck
          pl={4}
        />

        <div ref={emojiPickerRef}>
          <Button
            variant="unstyled"
            type="button"
            sx={{
              position: "absolute",
              p: 1,
              top: 82,
              display: "inline-block",
            }}
            onClick={toggleEmojiPicker}
          >
            {watchEmoji}
          </Button>

          <Controller
            name="emoji"
            control={control}
            defaultValue={defaultEmoji}
            render={(props) =>
              emojiPickerOpen ? (
                <Picker
                  title="Pick an emoji"
                  emoji="point_up"
                  native
                  theme="dark"
                  onSelect={(emoji: BaseEmoji) => {
                    props.onChange(emoji.native);
                    toggleEmojiPicker();
                  }}
                  style={{ position: "absolute" }}
                />
              ) : (
                <></>
              )
            }
          />
        </div>

        <Flex sx={{ float: "right", mt: 3 }}>
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
      </form>
    </Modal>
  );
};
