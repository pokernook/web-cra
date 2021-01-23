import { Redirect, Route, Switch } from "react-router-dom";

import { Helm } from "../layouts/Helm";

export const PrivateApp = () => (
  <Helm>
    <Switch>
      <Route exact path="/"></Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  </Helm>
);
