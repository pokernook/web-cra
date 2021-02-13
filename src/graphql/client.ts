import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
} from "urql";

import { config } from "../config";

export const client = createClient({
  exchanges: [cacheExchange, dedupExchange, fetchExchange],
  fetchOptions: { credentials: "include" },
  requestPolicy: "cache-and-network",
  url: config.graphqlUrl,
});
