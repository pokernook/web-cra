import { FC } from "react";
import { Box, Grid } from "theme-ui";

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
          <Box sx={{ height: 450, width: 650 }}>
            <Grid gap={3} columns={[2, "1fr 2fr"]}>
              <Box />

              <Box />
            </Grid>
          </Box>
        </ModalContent>
      </ModalCard>
    </ModalPortal>
  );
};
