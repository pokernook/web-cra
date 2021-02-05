import ReactDOM from "react-dom";

import { App } from "./App";
import { Providers } from "./context/Providers";

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById("root")
);
