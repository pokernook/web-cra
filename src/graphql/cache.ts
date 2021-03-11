import { Data, ResolverConfig, UpdatesConfig } from "@urql/exchange-graphcache";

import * as graphql from "./types";

export const resolvers: ResolverConfig = {
  User: {
    discriminator: (parent) =>
      parent.discriminator?.toString().padStart(4, "0"),
  },
  UserStatus: {
    emoji: (parent) => parent.emoji ?? "💬",
  },
};

export const updates: Partial<UpdatesConfig> = {
  Mutation: {
    userLogIn: (result, _args, cache) => {
      cache.updateQuery({ query: graphql.MeDocument }, (data) => {
        const castData = data as graphql.MeQuery;
        const castResult = result as graphql.LogInMutation;
        castData.me = castResult.userLogIn?.user || null;
        return castData as Data;
      });
    },

    userSignUp: (result, _args, cache) => {
      cache.updateQuery({ query: graphql.MeDocument }, (data) => {
        const castData = data as graphql.MeQuery;
        const castResult = result as graphql.SignUpMutation;
        castData.me = castResult.userSignUp?.user || null;
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
