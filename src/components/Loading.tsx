import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { Flex } from "theme-ui";

import logo from "../assets/logo.svg";

type Props = {
  minLoadTime?: number;
  loading: boolean;
};

export const Loading: FC<Props> = ({
  loading,
  minLoadTime = 1000,
  children,
}) => {
  const [showLoading, setShowLoading] = useState(true);
  const [minLoadTimeMet, setMinLoadTimeMet] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoading(loading);
      setMinLoadTimeMet(true);
    }, minLoadTime);

    return () => clearTimeout(timeout);
  });

  useEffect(() => setShowLoading(loading || !minLoadTimeMet), [
    loading,
    minLoadTimeMet,
  ]);

  return (
    <>
      {showLoading ? (
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <motion.img
            src={logo}
            initial={{ scale: 0.5 }}
            animate={{ scale: [0.5, 0.52, 0.5] }}
            transition={{ duration: 1.1, repeat: Infinity }}
          />
        </Flex>
      ) : (
        children
      )}
    </>
  );
};
