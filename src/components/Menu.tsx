/** @jsxImportSource theme-ui */
import { FC, useRef } from "react";
import { Card, Divider, Flex, ThemeUIStyleObject } from "theme-ui";

import { useClickOutside } from "../hooks";

type MenuProps = {
  toggle: () => void;
  sx?: ThemeUIStyleObject;
};

// TODO: Menu should close when any action is performed within the menu
export const Menu: FC<MenuProps> = ({ children, toggle, ...props }) => {
  const menuRef = useRef(null);

  useClickOutside(menuRef, toggle);

  return (
    <div ref={menuRef} sx={{ position: "relative" }} {...props}>
      {children}
    </div>
  );
};

type MenuCardProps = {
  sx?: ThemeUIStyleObject;
};

export const MenuCard: FC<MenuCardProps> = ({ children, ...props }) => (
  <Card variant="menu" {...props}>
    {children}
  </Card>
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
