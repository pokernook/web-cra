/**
* This file was generated by GraphQL Code Generator
* Do not make changes to this file directly
*/

import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  __typename?: 'AuthPayload';
  user?: Maybe<User>;
};

export type LogOutPayload = {
  __typename?: 'LogOutPayload';
  sessionId?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  discriminator: Scalars['Int'];
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  Tag?: Maybe<UserTagCompoundUniqueInput>;
};

export type UserTagCompoundUniqueInput = {
  username: Scalars['String'];
  discriminator: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  users: Array<User>;
  me?: Maybe<User>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<UserWhereUniqueInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  signUp?: Maybe<AuthPayload>;
  logIn?: Maybe<AuthPayload>;
  logOut?: Maybe<LogOutPayload>;
};


export type MutationSignUpArgs = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLogInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LogInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LogInMutation = (
  { __typename?: 'Mutation' }
  & { logIn?: Maybe<(
    { __typename?: 'AuthPayload' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'username' | 'discriminator'>
    )> }
  )> }
);

export type SignUpMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { signUp?: Maybe<(
    { __typename?: 'AuthPayload' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'username' | 'discriminator'>
    )> }
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'username' | 'discriminator'>
  )> }
);


export const LogInDocument = gql`
    mutation logIn($email: String!, $password: String!) {
  logIn(email: $email, password: $password) {
    user {
      id
      email
      username
      discriminator
    }
  }
}
    `;

export function useLogInMutation() {
  return Urql.useMutation<LogInMutation, LogInMutationVariables>(LogInDocument);
};
export const SignUpDocument = gql`
    mutation signUp($username: String!, $email: String!, $password: String!) {
  signUp(username: $username, email: $email, password: $password) {
    user {
      id
      email
      username
      discriminator
    }
  }
}
    `;

export function useSignUpMutation() {
  return Urql.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument);
};
export const MeDocument = gql`
    query me {
  me {
    id
    email
    username
    discriminator
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};