import { FC, useRef } from "react";
import { createPortal } from "react-dom";
import { Flex } from "theme-ui";

import { useClickOutside, useKeyPress } from "../hooks";

type ModalPortalProps = {
  open: boolean;
  close: () => void;
  fadeBackground?: boolean;
};

export const ModalPortal: FC<ModalPortalProps> = ({
  open,
  close,
  fadeBackground = true,
  children,
}) => {
  const ref = useRef(null);

  useClickOutside(ref, close);
  useKeyPress("Escape", close);

  return createPortal(
    open && (
      <ModalWrapper fadeBackground={fadeBackground}>
        <div ref={ref}>{children}</div>
      </ModalWrapper>
    ),
    document.body
  );
};

type ModalWrapperProps = {
  fadeBackground: boolean;
};

const ModalWrapper: FC<ModalWrapperProps> = ({ fadeBackground, children }) => (
  <Flex
    sx={{
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 10,
      bg: fadeBackground && "rgba(0, 0, 0, 0.6)",
    }}
  >
    {children}
  </Flex>
);
