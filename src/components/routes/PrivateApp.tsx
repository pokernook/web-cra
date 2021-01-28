import { Redirect, Route, Switch } from "react-router-dom";

import { Dashboard } from "../layouts/Dashboard";

export const PrivateApp = () => (
  <Dashboard>
    <Switch>
      <Route exact path="/"></Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  </Dashboard>
);
