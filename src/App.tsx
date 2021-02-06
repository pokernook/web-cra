import { useEffect, useState } from "react";

import { useMeQuery } from "./graphql/types";
import { Loading } from "./pages/Loading";
import { PrivateApp } from "./PrivateApp";
import { PublicApp } from "./PublicApp";
import { useUserStore } from "./stores/user";

export const App = () => {
  const [launching, setLaunching] = useState(true);
  const [meQuery] = useMeQuery();
  const [user, setUser] = useUserStore((state) => [state.user, state.setUser]);

  const { data, fetching: fetchingUser } = meQuery;

  // Set minimum launch time
  useEffect(() => {
    setTimeout(() => {
      setLaunching(false);
    }, 1000);
  });

  // Refresh user data
  useEffect(() => {
    setUser(data?.me);
  }, [data, setUser]);

  return fetchingUser || launching ? (
    <Loading />
  ) : user ? (
    <PrivateApp />
  ) : (
    <PublicApp />
  );
};
