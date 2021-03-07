import { ThemeUIStyleObject } from "@theme-ui/css";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect, useState } from "react";

export const FadeIn: FC = ({ children }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    {children}
  </motion.div>
);

type FadeOutProps = {
  showTime?: number;
  sx?: ThemeUIStyleObject;
};

export const FadeOut: FC<FadeOutProps> = ({
  showTime = 1500,
  children,
  ...props
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), showTime);

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
