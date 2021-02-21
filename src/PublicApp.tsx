import { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container, Image } from "theme-ui";

import logo from "./assets/logo.svg";
import { LogIn } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";

const PublicAppLayout: FC = ({ children }) => (
  <Container sx={{ maxWidth: 325, pt: 20, textAlign: "center" }}>
    <Image height={128} width={128} src={logo} mb={2} />
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
