import { FC } from "react";
import { Container, Image } from "theme-ui";

import logo from "../assets/logo.svg";

export const PublicLayout: FC = ({ children }) => (
  <Container sx={{ maxWidth: 325, pt: 20, textAlign: "center" }}>
    <Image height={128} width={128} src={logo} mb={2} />
    {children}
  </Container>
);
