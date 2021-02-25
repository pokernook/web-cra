import { FC, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { useClickOutside } from "../hooks";

export const Modal: FC = ({ children }) => {
  const modalRef = useRef(null);
  const [open, setOpen] = useState(false);

  useClickOutside(modalRef, () => setOpen(false));

  return createPortal(open && <>{children}</>, document.body);
};
