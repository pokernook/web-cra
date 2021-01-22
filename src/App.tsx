import { useEffect } from "react";

import { PrivateApp } from "./routes/PrivateApp";
import { PublicApp } from "./routes/PublicApp";
import { useUserStore } from "./stores/user";

export const App = () => {
  const [user, checkSession] = useUserStore((state) => [
    state.user,
    state.checkSession,
  ]);

  useEffect(checkSession, [checkSession]); // TODO: Avoid "unauthenticated flash" when checking session

  return user ? <PrivateApp /> : <PublicApp />;
};
