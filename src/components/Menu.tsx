/** @jsxImportSource theme-ui */
import { FC, ReactNode, useRef, useState } from "react";

import { useClickOutside } from "../hooks";

type Props = {
  trigger: ReactNode;
};

export const Menu: FC<Props> = ({ children, trigger }) => {
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  useClickOutside(menuRef, () => setOpen(false));

  return (
    <div ref={menuRef}>
      <p onClick={toggle} sx={{ ":hover": { cursor: "pointer" } }}>
        {trigger}
      </p>

      {open && children}
    </div>
  );
};
