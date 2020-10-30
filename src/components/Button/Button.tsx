/** @jsxRuntime classic */
/** @jsx jsx */
import { FC, ReactNode } from "react";
import { jsx } from "theme-ui";

export type ButtonProps = {
  children: ReactNode;
  variant: string;
};

export const Button: FC<ButtonProps> = ({ variant, ...props }) => (
  <button
    {...props}
    sx={{
      px: 4,
      py: 3,
      m: 0,
      appearance: "none",
      textDecoration: "none",
      lineHeight: "inherit",
      fontSize: "inherit",
      textAlign: "center",
      userSelect: "none",
      border: 0,
      borderRadius: 4,
      variant: `buttons.${variant}`,
      ":hover": {
        cursor: "pointer",
      },
    }}
  />
);
