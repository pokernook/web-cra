import { Redirect, Route, Switch } from "react-router-dom";

import { PrivateLayout } from "./layouts/Private";

export const PrivateApp = () => (
  <PrivateLayout>
    <Switch>
      <Route exact path="/"></Route>

      <Route exact path="/friends"></Route>

      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  </PrivateLayout>
);
