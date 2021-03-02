import ReactDOM from "react-dom";

import { App } from "./App";
import { ContextProviders } from "./components/ContextProviders";

ReactDOM.render(
  <ContextProviders>
    <App />
  </ContextProviders>,
  document.getElementById("root")
);
