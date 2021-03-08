import { FC } from "react";
import { Button, ButtonProps, Card, CardProps, Divider } from "theme-ui";

export const MenuCard: FC<CardProps> = ({ children, ...props }) => (
  <Card variant="menu" {...props}>
    {children}
  </Card>
);

export const MenuDivider: FC = () => <Divider my={2} />;

export const MenuButton: FC<ButtonProps> = ({ children, ...props }) => (
  <Button variant="menu" {...props}>
    {children}
  </Button>
);
