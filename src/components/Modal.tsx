import { FC, useRef } from "react";
import { createPortal } from "react-dom";
import { Flex } from "theme-ui";

import { useClickOutside, useKeyPress } from "../hooks";

type ModalPortalProps = {
  close: () => void;
  fadeBackground?: boolean;
};

export const ModalPortal: FC<ModalPortalProps> = ({
  close,
  fadeBackground = false,
  children,
}) => {
  const ref = useRef(null);

  useClickOutside(ref, close);
  useKeyPress("Escape", close);

  return createPortal(
    <ModalWrapper>
      {fadeBackground && <ModalDimmer />}
      <div ref={ref}>{children}</div>
    </ModalWrapper>,
    document.body
  );
};

const ModalWrapper: FC = ({ children }) => (
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
    }}
  >
    {children}
  </Flex>
);

const ModalDimmer = () => (
  <Flex
    sx={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      bg: "rgba(0, 0, 0, 0.6)",
    }}
  />
);
