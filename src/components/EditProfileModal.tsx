import { Card, Close, Heading } from "@theme-ui/components";
import { FC } from "react";

import { ModalPortal } from "./Modal";

type Props = {
  onClose: () => void;
};

export const EditProfileModal: FC<Props> = ({ onClose }) => {
  return (
    <ModalPortal onClose={onClose} hasDimmedBackground>
      <Card variant="modal">
        <Close
          onClick={onClose}
          sx={{ position: "absolute", top: 10, right: 10 }}
        />
        <Heading>Edit your profile</Heading>
      </Card>
    </ModalPortal>
  );
};
