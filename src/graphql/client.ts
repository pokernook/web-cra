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
  UserStatus: {
    emoji: (parent) => parent.emoji ?? "💬",
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

    userDeleteAccount: (_result, _args, cache) => {
      cache.invalidate("Query", "me");
    },

    userClearStatus: (_result, _args, cache) => {
      cache.updateQuery({ query: graphql.MeDocument }, (data) => {
        const castData = data as graphql.MeQuery;
        if (castData.me) {
          castData.me.status = null;
        }
        return castData as Data;
      });
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
