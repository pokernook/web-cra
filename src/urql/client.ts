import { NextUrqlClientConfig } from "next-urql";
import { cacheExchange, dedupExchange, fetchExchange } from "urql";

import { config } from "../config";

export const createUrqlClient: NextUrqlClientConfig = (ssrExchange) => ({
  exchanges: [cacheExchange, dedupExchange, fetchExchange, ssrExchange],
  fetchOptions: { credentials: "include" },
  url: config.graphqlUrl,
});
