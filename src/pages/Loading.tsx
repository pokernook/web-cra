/** @jsxImportSource theme-ui */
import { motion } from "framer-motion";
import { Container } from "theme-ui";

import logo from "../assets/logo.svg";

export const Loading = () => (
  <Container
    sx={{
      alignItems: "center",
      display: "flex",
      height: "100vh",
      justifyContent: "center",
    }}
  >
    <motion.img
      alt="Logo"
      src={logo}
      animate={{ scale: [0.5, 0.6, 0.5] }}
      transition={{ duration: 1.1, repeat: Infinity }}
    />
  </Container>
);
