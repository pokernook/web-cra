import ReactDOM from "react-dom";

import { App } from "./App";
import { Providers } from "./context";

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById("root")
);
