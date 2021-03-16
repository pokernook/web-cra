import { Redirect, Route, Switch } from "react-router-dom";

import { PrivateLayout } from "./layouts/Private";
import { Friends } from "./pages/Friends";

export const PrivateApp = () => (
  <PrivateLayout>
    <Switch>
      <Route exact path="/"></Route>

      <Route exact path="/friends">
        <Friends />
      </Route>

      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  </PrivateLayout>
);
