/** @jsxImportSource theme-ui */
import { FC, ReactNode, useRef, useState } from "react";
import { Card } from "theme-ui";

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
    <div ref={menuRef} sx={{ position: "relative" }}>
      <div onClick={toggle} sx={{ ":hover": { cursor: "pointer" } }}>
        {trigger}
      </div>

      {open && <Card variant="menu">{children}</Card>}
    </div>
  );
};
