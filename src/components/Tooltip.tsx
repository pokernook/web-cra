import { FC, ReactNode, useState } from "react";
import { Box } from "theme-ui";

type TooltipProps = {
  content: string | ReactNode;
};

export const Tooltip: FC<TooltipProps> = ({ content, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {children}
      {open && content}
    </Box>
  );
};
