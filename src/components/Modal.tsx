/** @jsxImportSource theme-ui */
import { FC, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Flex } from "theme-ui";

import { useClickOutside } from "../hooks";

export const Modal: FC = ({ children }) => {
  const modalRef = useRef(null);
  const [open, setOpen] = useState(false);

  useClickOutside(modalRef, () => setOpen(false));

  return createPortal(
    open && <ModalBackground>{children}</ModalBackground>,
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
