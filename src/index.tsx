import ReactDOM from "react-dom";

import { App } from "./App";
import { Providers } from "./components/context/Providers";

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById("root")
);
