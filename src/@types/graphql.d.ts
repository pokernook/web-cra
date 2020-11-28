import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
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
  UserTag?: Maybe<UserTagCompoundUniqueInput>;
};

export type UserTagCompoundUniqueInput = {
  username: Scalars['String'];
  discriminator: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
  users: Array<User>;
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
