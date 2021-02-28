/** @jsxImportSource theme-ui */
import { FC, ReactNode, useRef, useState } from "react";
import { Card, Divider, Flex, ThemeUIStyleObject } from "theme-ui";

import { useClickOutside } from "../hooks";

type MenuProps = {
  trigger: ReactNode;
  sx?: ThemeUIStyleObject;
};

// TODO: Menu should close when any action is performed within the menu
export const Menu: FC<MenuProps> = ({ children, trigger, ...props }) => {
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  useClickOutside(menuRef, () => setOpen(false));

  return (
    <div ref={menuRef} sx={{ position: "relative" }} {...props}>
      <div onClick={toggle} sx={{ ":hover": { cursor: "pointer" } }}>
        {trigger}
      </div>

      {open && children}
    </div>
  );
};

export const MenuCard: FC = ({ children }) => (
  <Card variant="menu">{children}</Card>
);

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
