import { FC } from "react";
import { createPortal } from "react-dom";
import { Flex } from "theme-ui";

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
  // TODO: This should only close the current modal
  useKeyPress("Escape", onClose);

  return createPortal(
    <ModalWrapper hasDimmedBackground={hasDimmedBackground}>
      <ModalOverlay onClick={onClose} />
      {children}
    </ModalWrapper>,
    document.body
  );
};

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
};

const ModalOverlay: FC<ModalOverlayProps> = ({ onClick }) => (
  <Flex
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
