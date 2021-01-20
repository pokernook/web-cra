import { FC } from "react";
import { Route, Switch } from "react-router-dom";

import { LogIn } from "./pages/logIn";
import { SignUp } from "./pages/signUp";
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

  return (
    <>
      <pre>{user?.username}</pre>
      <pre>{user?.discriminator}</pre>
    </>
  );
};

export const App: FC = () => {
  const user = useUserStore((state) => state.user);

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};
