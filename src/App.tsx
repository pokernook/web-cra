import { FC, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import { LogIn } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { useUserStore } from "./stores/user";

const UnauthenticatedApp: FC = () => (
  <>
    <Switch>
      <Route path="/logIn">
        <LogIn />
      </Route>
      <Route path="/">
        <SignUp />
      </Route>
    </Switch>
  </>
);

const AuthenticatedApp: FC = () => {
  const user = useUserStore((state) => state.user);
  const history = useHistory();

  useEffect(() => history.push("/"), [history]);

  // TODO: Using the back button while authenticated reveals unauthenticated routes
  return (
    <>
      <Switch>
        <Route path="/">
          <pre>{user?.id}</pre>
          <pre>{user?.email}</pre>
          <pre>{user?.username}</pre>
          <pre>{user?.discriminator}</pre>
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
