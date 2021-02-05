import { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "theme-ui";

import { LogIn } from "../../pages/LogIn";
import { SignUp } from "../../pages/SignUp";

const PublicAppLayout: FC = ({ children }) => (
  <Container sx={{ maxWidth: 325, pt: 20, textAlign: "center" }}>
    {children}
  </Container>
);

export const PublicApp = () => (
  <PublicAppLayout>
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
  </PublicAppLayout>
);
