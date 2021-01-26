import { Redirect, Route, Switch } from "react-router-dom";

import { Entrance } from "../layouts/Entrance";
import { LogIn } from "../pages/LogIn";
import { SignUp } from "../pages/SignUp";

export const PublicApp = () => (
  <Entrance>
    <Switch>
      <Route exact path="/logIn">
        <LogIn />
      </Route>
      <Route exact path="/">
        <SignUp />
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  </Entrance>
);
