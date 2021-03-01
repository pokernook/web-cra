import { FC, useRef } from "react";
import { Card, Divider, Flex, ThemeUIStyleObject } from "theme-ui";

import { useClickOutside, useKeyPress } from "../hooks";

type MenuProps = {
  open: boolean;
  close: () => void;
  sx?: ThemeUIStyleObject;
};

export const Menu: FC<MenuProps> = ({ open, close, children, ...props }) => {
  const menuRef = useRef(null);

  useClickOutside(menuRef, close);
  useKeyPress("Escape", close);

  return (
    <>
      {open && (
        <div ref={menuRef} sx={{ position: "relative" }} {...props}>
          {children}
        </div>
      )}
    </>
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
      ":hover": { cursor: "pointer", bg: "secondary" },
    }}
  >
    {children}
  </Flex>
);

export const MenuSeparator = () => <Divider my={2} />;
