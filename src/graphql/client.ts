import { cacheExchange } from "@urql/exchange-graphcache";
import { createClient, dedupExchange, fetchExchange } from "urql";

import { config } from "../config";

export const client = createClient({
  exchanges: [cacheExchange(), dedupExchange, fetchExchange],
  fetchOptions: { credentials: "include" },
  url: config.graphqlUrl,
});
