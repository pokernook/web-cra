import { devtoolsExchange } from "@urql/devtools";
import {
  cacheExchange,
  Data,
  ResolverConfig,
  UpdatesConfig,
} from "@urql/exchange-graphcache";
import { createClient, dedupExchange, fetchExchange } from "urql";

import { config } from "../config";
import * as graphql from "./types";

const resolvers: ResolverConfig = {
  User: {
    discriminator: (parent) =>
      parent.discriminator?.toString().padStart(4, "0"),
  },
};

const updates: Partial<UpdatesConfig> = {
  Mutation: {
    userLogIn: (result, _args, cache) => {
      cache.updateQuery({ query: graphql.MeDocument }, (data) => {
        const castData = data as graphql.MeQuery;
        const castResult = result as graphql.LogInMutation;
        castData.me = castResult.userLogIn?.user;
        return castData as Data;
      });
    },

    userSignUp: (result, _args, cache) => {
      cache.updateQuery({ query: graphql.MeDocument }, (data) => {
        const castData = data as graphql.MeQuery;
        const castResult = result as graphql.SignUpMutation;
        castData.me = castResult.userSignUp?.user;
        return castData as Data;
      });
    },

    userLogOut: (_result, _args, cache) => {
      cache.invalidate("Query", "me");
    },
  },
};

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
