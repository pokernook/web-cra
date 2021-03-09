import { FC } from "react";
import { Box } from "theme-ui";

import {
  ModalCard,
  ModalClose,
  ModalContent,
  ModalHeader,
  ModalPortal,
} from "./Modal";

type Props = {
  onClose: () => void;
};

export const SettingsModal: FC<Props> = ({ onClose }) => {
  return (
    <ModalPortal onClose={onClose} hasDimmedBackground>
      <ModalCard>
        <ModalClose onClose={onClose} />
        <ModalHeader>Settings</ModalHeader>

        <ModalContent>
          <Box sx={{ height: 450 }}></Box>
        </ModalContent>
      </ModalCard>
    </ModalPortal>
  );
};
