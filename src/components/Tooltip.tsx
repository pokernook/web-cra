import { FC, ReactNode, useState } from "react";
import { Box, Card } from "theme-ui";

type TooltipProps = {
  content: string | ReactNode;
};

export const Tooltip: FC<TooltipProps> = ({ content, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ position: "relative" }}>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {children}
      </div>
      {open && <Card variant="tooltip">{content}</Card>}
    </Box>
  );
};
