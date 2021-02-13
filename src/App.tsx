import { useEffect, useMemo, useState } from "react";

import { useMeQuery } from "./graphql";
import { Loading } from "./pages/Loading";
import { PrivateApp } from "./PrivateApp";
import { PublicApp } from "./PublicApp";

export const App = () => {
  const context = useMemo(() => ({ additionalTypenames: ["User"] }), []);
  const [meQuery] = useMeQuery({ context });
  const [launching, setLaunching] = useState(true);

  const { data, fetching: fetchingUser } = meQuery;

  // Set minimum launch time
  useEffect(() => {
    setTimeout(() => {
      setLaunching(false);
    }, 1000);
  });

  return fetchingUser || launching ? (
    <Loading />
  ) : data?.me ? (
    <PrivateApp />
  ) : (
    <PublicApp />
  );
};
