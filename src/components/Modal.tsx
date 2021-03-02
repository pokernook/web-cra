import { FC, useRef } from "react";
import { createPortal } from "react-dom";
import { Flex } from "theme-ui";

import { useKeyPress } from "../hooks";

type ModalPortalProps = {
  close: () => void;
  fadeBackground?: boolean;
};

export const ModalPortal: FC<ModalPortalProps> = ({
  close,
  fadeBackground,
  children,
}) => {
  const ref = useRef(null);

  useKeyPress("Escape", close);

  return createPortal(
    <ModalWrapper fadeBackground={fadeBackground}>
      <ModalOverlay onClick={close} />
      <div ref={ref}>{children}</div>
    </ModalWrapper>,
    document.body
  );
};

type ModalWrapperProps = {
  fadeBackground?: boolean;
};

const ModalWrapper: FC<ModalWrapperProps> = ({
  fadeBackground = false,
  children,
}) => (
  <Flex
    sx={{
      bg: fadeBackground && "rgba(0, 0, 0, 0.6)",
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
      width: "100%",
      height: "100%",
      zIndex: -1,
    }}
  />
);
