import { Redirect, Route, Switch } from "react-router-dom";

import { LogIn } from "../pages/LogIn";
import { SignUp } from "../pages/SignUp";

export const PublicApp = () => (
  <>
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
  </>
);
