import { NextUrqlClientConfig } from "next-urql";
import { cacheExchange, dedupExchange, fetchExchange } from "urql";

import { config } from "../config";

export const urqlClient: NextUrqlClientConfig = (ssrExchange) => ({
  url: config.graphqlUrl,
  exchanges: [cacheExchange, dedupExchange, fetchExchange, ssrExchange],
});
