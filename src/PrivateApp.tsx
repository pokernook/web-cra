import { Redirect, Route, Switch } from "react-router-dom";

import { PrivateLayout } from "./layouts/Private";
import { Settings } from "./pages/Settings";

export const PrivateApp = () => (
  <PrivateLayout>
    <Switch>
      <Route exact path="/"></Route>

      <Route path="/settings">
        <Settings />
      </Route>

      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  </PrivateLayout>
);
