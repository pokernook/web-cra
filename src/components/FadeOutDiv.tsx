import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { ThemeUIStyleObject } from "theme-ui";

type Props = {
  showTime?: number;
  sx?: ThemeUIStyleObject;
};

export const FadeOutDiv: FC<Props> = ({
  showTime = 1500,
  children,
  ...props
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, showTime);

    return () => clearTimeout(timeout);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          {...props}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
