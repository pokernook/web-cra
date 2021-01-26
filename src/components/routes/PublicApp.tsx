import { Redirect, Route, Switch } from "react-router-dom";

import { Authentication } from "../layouts/Authentication";
import { LogIn } from "../pages/LogIn";
import { SignUp } from "../pages/SignUp";

export const PublicApp = () => (
  <Authentication>
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
  </Authentication>
);
