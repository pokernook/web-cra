import { Redirect, Route, Switch } from "react-router-dom";

import { Helm } from "../layouts/Helm";
import { useUserStore } from "../stores/user";

export const PrivateApp = () => {
  const user = useUserStore((state) => state.user);

  return (
    <Helm>
      <Switch>
        <Route exact path="/">
          <pre>ID: {user?.id}</pre>
          <pre>Created: {user?.createdAt}</pre>
          <pre>Email: {user?.email}</pre>
          <pre>
            Tag: {user?.username}#{user?.discriminator}
          </pre>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Helm>
  );
};
