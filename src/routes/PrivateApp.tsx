import { Redirect, Route, Switch } from "react-router-dom";

import { useUserStore } from "../stores/user";

export const PrivateApp = () => {
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
