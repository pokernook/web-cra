/** @jsxImportSource theme-ui */
import { FC, ReactNode, useRef, useState } from "react";
import { Button, Card, Flex } from "theme-ui";

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
      <Button onClick={toggle} variant="unstyled">
        {trigger}
      </Button>

      {open && <Card variant="menu">{children}</Card>}
    </div>
  );
};

export const MenuItem: FC = ({ children }) => (
  <Flex sx={{ alignItems: "center", px: 3, py: 1 }}>{children}</Flex>
);
