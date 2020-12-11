import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthPayload = {
  __typename?: "AuthPayload";
  token?: Maybe<Scalars["String"]>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: "Mutation";
  logIn?: Maybe<AuthPayload>;
  signUp?: Maybe<AuthPayload>;
};

export type MutationLogInArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationSignUpArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  user?: Maybe<User>;
  users: Array<User>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  skip?: Maybe<Scalars["Int"]>;
  take?: Maybe<Scalars["Int"]>;
};

export type User = {
  __typename?: "User";
  discriminator: Scalars["Int"];
  email: Scalars["String"];
  id: Scalars["String"];
  username: Scalars["String"];
};

export type UserTagCompoundUniqueInput = {
  discriminator: Scalars["Int"];
  username: Scalars["String"];
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  UserTag?: Maybe<UserTagCompoundUniqueInput>;
};

export type LogInMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type LogInMutation = { __typename?: "Mutation" } & {
  logIn?: Maybe<{ __typename?: "AuthPayload" } & Pick<AuthPayload, "token">>;
};

export type SignUpMutationVariables = Exact<{
  username: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type SignUpMutation = { __typename?: "Mutation" } & {
  signUp?: Maybe<{ __typename?: "AuthPayload" } & Pick<AuthPayload, "token">>;
};

export const LogInDocument = gql`
  mutation logIn($email: String!, $password: String!) {
    logIn(email: $email, password: $password) {
      token
    }
  }
`;

export function useLogInMutation() {
  return Urql.useMutation<LogInMutation, LogInMutationVariables>(LogInDocument);
}
export const SignUpDocument = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

export function useSignUpMutation() {
  return Urql.useMutation<SignUpMutation, SignUpMutationVariables>(
    SignUpDocument
  );
}
