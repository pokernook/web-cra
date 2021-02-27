import "emoji-mart/css/emoji-mart.css";

import { Picker } from "emoji-mart";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Flex, Input, Label } from "theme-ui";

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

  // TODO: Display graphql errors
  return (
    <Modal title="Set a status" open={open} closeModal={closeModal}>
      <form onSubmit={handleSaveStatus}>
        <Label>What's happening {data?.me?.username}?</Label>

        <Button
          variant="unstyled"
          type="button"
          sx={{ position: "absolute", p: 1 }}
          onClick={toggleEmojiPicker}
        >
          {data?.me?.status?.emoji}
        </Button>
        <Input
          type="text"
          defaultValue={data?.me?.status?.message || ""}
          spellCheck
          name="message"
          ref={register({ required: true })}
          pl={4}
        />

        {emojiPickerOpen && (
          <Picker
            emoji="point_up"
            native
            theme="dark"
            title="Pick an emoji"
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
