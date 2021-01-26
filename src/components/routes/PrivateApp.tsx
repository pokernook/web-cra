import { Redirect, Route, Switch } from "react-router-dom";

import { Helm } from "../layouts/Helm";
import { Profile } from "../pages/Profile";

export const PrivateApp = () => (
  <Helm>
    <Switch>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/"></Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  </Helm>
);
