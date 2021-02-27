import "emoji-mart/css/emoji-mart.css";

import { BaseEmoji, Picker } from "emoji-mart";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Field, Flex } from "theme-ui";

import {
  useClearStatusMutation,
  useMeQuery,
  useSetStatusMutation,
} from "../graphql";
import { Modal } from "./Modal";

type Props = {
  open: boolean;
  closeModal: () => void;
};

export const SetStatusModal: FC<Props> = ({ open, closeModal }) => {
  const [meQuery] = useMeQuery();
  const [, clearStatus] = useClearStatusMutation();
  const [, setStatus] = useSetStatusMutation();
  const { register, handleSubmit } = useForm();
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

  const { data } = meQuery;

  const toggleEmojiPicker = () => setEmojiPickerOpen(!emojiPickerOpen);

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

  const handleEmojiSelect = (emoji: BaseEmoji) => {
    console.log(emoji.native);
    toggleEmojiPicker();
  };

  // TODO: Display graphql errors
  return (
    <Modal title="Set a status" open={open} closeModal={closeModal}>
      <form onSubmit={handleSaveStatus}>
        <Button
          variant="unstyled"
          type="button"
          sx={{ position: "absolute", px: 1, pt: 30 }}
          onClick={toggleEmojiPicker}
        >
          {data?.me?.status?.emoji}
        </Button>
        <Field
          label={`What's happening ${data?.me?.username}?`}
          type="text"
          defaultValue={data?.me?.status?.message || ""}
          name="message"
          ref={register({ required: true })}
          spellCheck
          pl={4}
        />

        {emojiPickerOpen && (
          <Picker
            emoji="point_up"
            native
            theme="dark"
            title="Pick an emoji"
            onSelect={handleEmojiSelect}
            style={{ position: "absolute" }}
          />
        )}

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
