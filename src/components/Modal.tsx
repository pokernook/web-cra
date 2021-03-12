import { FC, KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { Box, Card, Close, Flex, Heading } from "theme-ui";

import { useKeyPress } from "../hooks";

type ModalPortalProps = {
  onClose: () => void;
  hasDimmedBackground?: boolean;
};

export const ModalPortal: FC<ModalPortalProps> = ({
  onClose,
  hasDimmedBackground = false,
  children,
}) => {
  const closeOnEscape = useKeyPress("Escape", onClose);

  return createPortal(
    <ModalWrapper hasDimmedBackground={hasDimmedBackground}>
      <ModalOverlay onKeyUp={closeOnEscape} onClick={onClose} />
      {children}
    </ModalWrapper>,
    document.body
  );
};

export const ModalCard: FC = ({ children }) => (
  <Card variant="modal">{children}</Card>
);

type ModalCloseProps = {
  onClose: () => void;
};

export const ModalClose: FC<ModalCloseProps> = ({ onClose }) => (
  <Close onClick={onClose} sx={{ position: "absolute", top: 15, right: 15 }} />
);

export const ModalHeader: FC = ({ children }) => (
  <Flex sx={{ alignItems: "center", width: "100%", minHeight: 60 }}>
    <Heading p={3}>{children}</Heading>
  </Flex>
);

export const ModalContent: FC = ({ children }) => (
  <Box sx={{ width: "100%" }}>{children}</Box>
);

export const ModalFooter: FC = ({ children }) => (
  <Flex
    sx={{
      alignItems: "center",
      justifyContent: "flex-end",
      width: "100%",
      minHeight: 60,
      p: 3,
    }}
  >
    {children}
  </Flex>
);

type ModalWrapperProps = {
  hasDimmedBackground: boolean;
};

const ModalWrapper: FC<ModalWrapperProps> = ({
  hasDimmedBackground,
  children,
}) => (
  <Flex
    sx={{
      bg: hasDimmedBackground && "rgba(0, 0, 0, 0.6)",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 10,
    }}
  >
    {children}
  </Flex>
);

type ModalOverlayProps = {
  onClick: () => void;
  onKeyUp: (e: KeyboardEvent) => void;
};

const ModalOverlay: FC<ModalOverlayProps> = ({ onClick, onKeyUp }) => (
  <Flex
    ref={(ref) => ref?.focus()}
    tabIndex={0}
    onKeyUp={onKeyUp}
    onClick={onClick}
    sx={{
      display: "none",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: -1,
    }}
  />
);
