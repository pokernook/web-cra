import { FC, useRef } from "react";
import { ThemeUIStyleObject } from "theme-ui";

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
