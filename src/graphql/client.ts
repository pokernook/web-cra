import { devtoolsExchange } from "@urql/devtools";
import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
} from "urql";

import { config } from "../config";

export const client = createClient({
  exchanges: [devtoolsExchange, cacheExchange, dedupExchange, fetchExchange],
  fetchOptions: { credentials: "include" },
  requestPolicy: "cache-and-network",
  url: config.graphqlUrl,
});
