import { FC, useRef } from "react";
import { createPortal } from "react-dom";
import { Card, Flex } from "theme-ui";

import { useClickOutside } from "../hooks";

type ModalProps = {
  open: boolean;
  toggle: () => void;
};

export const Modal: FC<ModalProps> = ({ open, toggle, children }) => {
  const modalRef = useRef(null);

  useClickOutside(modalRef, toggle);

  return createPortal(
    open && (
      <ModalBackground>
        <Card ref={modalRef} variant="modal">
          {children}
        </Card>
      </ModalBackground>
    ),
    document.body
  );
};

const ModalBackground: FC = ({ children }) => (
  <Flex
    sx={{
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      top: 0,
      left: 0,
      bg: "rgba(0, 0, 0, 0.6)",
      width: "100vw",
      height: "100vh",
      zIndex: 10,
    }}
  >
    {children}
  </Flex>
);
