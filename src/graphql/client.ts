import { cacheExchange, ResolverConfig } from "@urql/exchange-graphcache";
import { createClient, dedupExchange, fetchExchange } from "urql";

import { config } from "../config";

const resolvers: ResolverConfig = {
  User: {
    discriminator: (parent) =>
      parent.discriminator?.toString().padStart(4, "0"),
  },
};

export const client = createClient({
  exchanges: [cacheExchange({ resolvers }), dedupExchange, fetchExchange],
  fetchOptions: { credentials: "include" },
  requestPolicy: "cache-and-network",
  url: config.graphqlUrl,
});
