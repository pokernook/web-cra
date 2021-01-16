import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import { Provider as UrqlProvider } from "urql";

import App from "./App";
import { client } from "./graphql";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <UrqlProvider value={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </UrqlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
