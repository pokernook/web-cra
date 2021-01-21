import { FC, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { LogIn } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { useUserStore } from "./stores/user";

const UnauthenticatedApp: FC = () => (
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

const AuthenticatedApp: FC = () => {
  const user = useUserStore((state) => state.user);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <pre>{user?.id}</pre>
          <pre>{user?.email}</pre>
          <pre>{user?.username}</pre>
          <pre>{user?.discriminator}</pre>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
};

export const App: FC = () => {
  const [user, checkSession] = useUserStore((state) => [
    state.user,
    state.checkSession,
  ]);

  useEffect(() => checkSession(), [checkSession]); // TODO: Avoid "unauthenticated flash" when checking session

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};
