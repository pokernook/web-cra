import { devtoolsExchange } from "@urql/devtools";
import { cacheExchange } from "@urql/exchange-graphcache";
import { createClient, dedupExchange, fetchExchange } from "urql";

import { config } from "../config";
import { resolvers, updates } from "./cache";

export const client = createClient({
  exchanges: [
    devtoolsExchange,
    cacheExchange({ resolvers, updates }),
    dedupExchange,
    fetchExchange,
  ],
  fetchOptions: { credentials: "include" },
  requestPolicy: "cache-and-network",
  url: config.graphqlUrl,
});
