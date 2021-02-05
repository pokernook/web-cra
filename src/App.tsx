import { useEffect } from "react";

import { Loading } from ".//pages/Loading";
import { PrivateApp } from "./PrivateApp";
import { PublicApp } from "./PublicApp";
import { useUserStore } from "./stores/user";

useUserStore.setState({ fetchingSession: true });

export const App = () => {
  const [user, checkSession, fetchingSession] = useUserStore((state) => [
    state.user,
    state.checkSession,
    state.fetchingSession,
  ]);

  useEffect(() => {
    setTimeout(() => {
      checkSession();
    }, 1000);
  }, [checkSession]);

  return fetchingSession ? <Loading /> : user ? <PrivateApp /> : <PublicApp />;
};
