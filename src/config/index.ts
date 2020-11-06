import env from "env-var";

export const config = {
  graphqlUrl: env.get("GRAPHQL_URL").required().asUrlString(),
};
