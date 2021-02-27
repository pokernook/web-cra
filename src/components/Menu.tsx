/** @jsxImportSource theme-ui */
import { FC, ReactNode, useRef, useState } from "react";
import { Card, Divider, Flex } from "theme-ui";

import { useClickOutside } from "../hooks";

type MenuProps = {
  trigger: ReactNode;
};

// TODO: Menu should close when any action is performed within the menu
export const Menu: FC<MenuProps> = ({ children, trigger }) => {
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

export const MenuItem: FC = ({ children }) => (
  <Flex sx={{ alignItems: "center", px: 3, py: 1 }}>{children}</Flex>
);

type MenuButtonProps = {
  onClick?: () => void;
};

export const MenuButton: FC<MenuButtonProps> = ({ children, onClick }) => (
  <Flex
    onClick={onClick}
    sx={{
      alignItems: "center",
      px: 3,
      py: 1,
      ":hover": { cursor: "pointer", bg: "accent" },
    }}
  >
    {children}
  </Flex>
);

export const MenuSeparator = () => <Divider my={2} />;
