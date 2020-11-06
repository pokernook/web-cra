import { NextUrqlClientConfig } from "next-urql";

export const urqlClient: NextUrqlClientConfig = (ssrExchange) => ({
  url: "http://localhost:3000",
  exchanges: [ssrExchange],
});
