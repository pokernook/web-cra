import { FC } from "react";
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

  const { data } = meQuery;

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

  return (
    <Modal title="Set a status" open={open} closeModal={closeModal}>
      <form onSubmit={handleSaveStatus}>
        <Field
          type="text"
          label={`What's happening ${data?.me?.username}?`}
          defaultValue={data?.me?.status?.message || ""}
          spellCheck
          name="message"
          ref={register({ required: true })}
          mb={3}
        />

        <Flex sx={{ float: "right" }}>
          <Button variant="tertiary" mr={2} onClick={handleClearStatus}>
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
