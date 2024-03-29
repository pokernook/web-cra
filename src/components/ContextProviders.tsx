import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import { Provider as UrqlProvider } from "urql";

import { client } from "../graphql";
import { theme } from "../theme";

export const ContextProviders: FC = ({ children }) => (
  <React.StrictMode>
    <UrqlProvider value={client}>
      <ThemeProvider theme={theme}>
        <Router>{children}</Router>
      </ThemeProvider>
    </UrqlProvider>
  </React.StrictMode>
);
