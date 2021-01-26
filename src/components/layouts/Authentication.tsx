import { FC } from "react";
import { Container } from "theme-ui";

export const Authentication: FC = ({ children }) => (
  <Container sx={{ maxWidth: 325, pt: 20, textAlign: "center" }}>
    {children}
  </Container>
);
