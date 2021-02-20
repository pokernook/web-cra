import { Loading } from "./components/Loading";
import { useMeQuery } from "./graphql";
import { PrivateApp } from "./PrivateApp";
import { PublicApp } from "./PublicApp";

export const App = () => {
  const [meQuery] = useMeQuery();
  const { data, fetching } = meQuery;

  return (
    <Loading loading={fetching}>
      {data?.me ? <PrivateApp /> : <PublicApp />}
    </Loading>
  );
};
