import { FC } from "react";
import { Route, Switch } from "react-router-dom";

import { LogIn } from "./pages/logIn";
import { SignUp } from "./pages/signUp";

export const App: FC = () => {
  return (
    <>
      <Switch>
        <Route path="/logIn">
          <LogIn />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
      </Switch>
    </>
  );
};
