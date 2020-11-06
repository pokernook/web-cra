import { NextUrqlClientConfig } from "next-urql";

import { config } from "../config";

export const urqlClient: NextUrqlClientConfig = (ssrExchange) => ({
  url: config.graphqlUrl,
  exchanges: [ssrExchange],
});
