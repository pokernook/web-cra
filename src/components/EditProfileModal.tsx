import { Button, Field } from "@theme-ui/components";
import { FC } from "react";

import { useMeQuery } from "../graphql";
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

export const EditProfileModal: FC<Props> = ({ onClose }) => {
  const [meQuery] = useMeQuery();

  const { data } = meQuery;

  return (
    <ModalPortal onClose={onClose} hasDimmedBackground>
      <ModalCard>
        <ModalClose onClose={onClose} />
        <ModalHeader>Edit your profile</ModalHeader>

        <ModalContent>
          <form id="profile-form" onSubmit={() => {}}>
            <Field
              label="Username"
              type="text"
              spellCheck={false}
              name="username"
              defaultValue={data?.me?.username}
            />
          </form>
        </ModalContent>

        <ModalFooter>
          <Button variant="tertiary" mr={2} onClick={onClose}>
            Cancel
          </Button>

          <Button variant="secondary">Save changes</Button>
        </ModalFooter>
      </ModalCard>
    </ModalPortal>
  );
};
