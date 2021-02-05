import { useEffect } from "react";

import { useMeQuery } from "./graphql/types";
import { Loading } from "./pages/Loading";
import { PrivateApp } from "./PrivateApp";
import { PublicApp } from "./PublicApp";
import { useUserStore } from "./stores/user";

export const App = () => {
  const [session] = useMeQuery();
  const [user, setUser] = useUserStore((state) => [state.user, state.setUser]);

  const { data } = session;
  const initialLoad = user === undefined;

  useEffect(() => {
    setTimeout(() => {
      setUser(data?.me);
    }, 1000);
  }, [data, setUser]);

  return initialLoad ? <Loading /> : user ? <PrivateApp /> : <PublicApp />;
};
