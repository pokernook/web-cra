import { FC, useRef } from "react";
import { createPortal } from "react-dom";
import { Box, Card, Close, Flex, Heading } from "theme-ui";

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
      <ModalWrapper>
        {fadeBackground && <ModalFade />}
        <div ref={ref}>{children}</div>
      </ModalWrapper>
    ),
    document.body
  );
};

const ModalWrapper: FC = ({ children }) => (
  <Flex
    sx={{
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

const ModalFade = () => (
  <Box
    sx={{
      bg: "rgba(0, 0, 0, 0.6)",
      width: "100%",
      height: "100%",
      position: "fixed",
    }}
  />
);

type ModalProps = {
  open: boolean;
  close: () => void;
  title: string;
};

export const Modal: FC<ModalProps> = ({ open, close, title, children }) => {
  const modalRef = useRef(null);

  useClickOutside(modalRef, close);
  useKeyPress("Escape", close);

  return createPortal(
    open && (
      <ModalBackground>
        <Card ref={modalRef} variant="modal">
          <Close
            onClick={close}
            sx={{ position: "absolute", top: 10, right: 10 }}
          />
          <Heading>{title}</Heading>
          <Box sx={{ mt: 3 }}>{children}</Box>
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
