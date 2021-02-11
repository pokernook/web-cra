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
  DateTime: any;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  discriminator: Scalars['Int'];
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  id: Scalars['String'];
  status?: Maybe<UserStatus>;
  username: Scalars['String'];
};

export type UserAuthPayload = {
  __typename?: 'UserAuthPayload';
  user?: Maybe<User>;
};

export type UserLogOutPayload = {
  __typename?: 'UserLogOutPayload';
  sessionId?: Maybe<Scalars['String']>;
};

export type UserStatus = {
  __typename?: 'UserStatus';
  createdAt: Scalars['DateTime'];
  emoji?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: User;
};


export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
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
  userSignUp?: Maybe<UserAuthPayload>;
  userLogIn?: Maybe<UserAuthPayload>;
  userLogOut?: Maybe<UserLogOutPayload>;
  userUpdateUsername?: Maybe<User>;
  userUpdatePassword?: Maybe<User>;
  userUpdateEmail?: Maybe<User>;
  userDeleteAccount?: Maybe<User>;
  userSetStatus?: Maybe<UserStatus>;
};


export type MutationUserSignUpArgs = {
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUserLogInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUserUpdateUsernameArgs = {
  newUsername: Scalars['String'];
};


export type MutationUserUpdatePasswordArgs = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationUserUpdateEmailArgs = {
  newEmail: Scalars['String'];
};


export type MutationUserSetStatusArgs = {
  emoji?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'createdAt' | 'email' | 'emailVerified' | 'username' | 'discriminator'>
);

export type DeleteAccountMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteAccountMutation = (
  { __typename?: 'Mutation' }
  & { userDeleteAccount?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export type LogInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LogInMutation = (
  { __typename?: 'Mutation' }
  & { userLogIn?: Maybe<(
    { __typename?: 'UserAuthPayload' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & UserFieldsFragment
    )> }
  )> }
);

export type LogOutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogOutMutation = (
  { __typename?: 'Mutation' }
  & { userLogOut?: Maybe<(
    { __typename?: 'UserLogOutPayload' }
    & Pick<UserLogOutPayload, 'sessionId'>
  )> }
);

export type SetStatusMutationVariables = Exact<{
  emoji?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
}>;


export type SetStatusMutation = (
  { __typename?: 'Mutation' }
  & { userSetStatus?: Maybe<(
    { __typename?: 'UserStatus' }
    & Pick<UserStatus, 'createdAt' | 'emoji' | 'id' | 'message' | 'updatedAt'>
  )> }
);

export type SignUpMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { userSignUp?: Maybe<(
    { __typename?: 'UserAuthPayload' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & UserFieldsFragment
    )> }
  )> }
);

export type UpdateEmailMutationVariables = Exact<{
  newEmail: Scalars['String'];
}>;


export type UpdateEmailMutation = (
  { __typename?: 'Mutation' }
  & { userUpdateEmail?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export type UpdatePasswordMutationVariables = Exact<{
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type UpdatePasswordMutation = (
  { __typename?: 'Mutation' }
  & { userUpdatePassword?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export type UpdateUsernameMutationVariables = Exact<{
  newUsername: Scalars['String'];
}>;


export type UpdateUsernameMutation = (
  { __typename?: 'Mutation' }
  & { userUpdateUsername?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export const UserFieldsFragmentDoc = gql`
    fragment userFields on User {
  id
  createdAt
  email
  emailVerified
  username
  discriminator
}
    `;
export const DeleteAccountDocument = gql`
    mutation deleteAccount {
  userDeleteAccount {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;

export function useDeleteAccountMutation() {
  return Urql.useMutation<DeleteAccountMutation, DeleteAccountMutationVariables>(DeleteAccountDocument);
};
export const LogInDocument = gql`
    mutation logIn($email: String!, $password: String!) {
  userLogIn(email: $email, password: $password) {
    user {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;

export function useLogInMutation() {
  return Urql.useMutation<LogInMutation, LogInMutationVariables>(LogInDocument);
};
export const LogOutDocument = gql`
    mutation logOut {
  userLogOut {
    sessionId
  }
}
    `;

export function useLogOutMutation() {
  return Urql.useMutation<LogOutMutation, LogOutMutationVariables>(LogOutDocument);
};
export const SetStatusDocument = gql`
    mutation setStatus($emoji: String, $message: String) {
  userSetStatus(emoji: $emoji, message: $message) {
    createdAt
    emoji
    id
    message
    updatedAt
  }
}
    `;

export function useSetStatusMutation() {
  return Urql.useMutation<SetStatusMutation, SetStatusMutationVariables>(SetStatusDocument);
};
export const SignUpDocument = gql`
    mutation signUp($username: String!, $email: String!, $password: String!) {
  userSignUp(username: $username, email: $email, password: $password) {
    user {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;

export function useSignUpMutation() {
  return Urql.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument);
};
export const UpdateEmailDocument = gql`
    mutation updateEmail($newEmail: String!) {
  userUpdateEmail(newEmail: $newEmail) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;

export function useUpdateEmailMutation() {
  return Urql.useMutation<UpdateEmailMutation, UpdateEmailMutationVariables>(UpdateEmailDocument);
};
export const UpdatePasswordDocument = gql`
    mutation updatePassword($currentPassword: String!, $newPassword: String!) {
  userUpdatePassword(currentPassword: $currentPassword, newPassword: $newPassword) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;

export function useUpdatePasswordMutation() {
  return Urql.useMutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>(UpdatePasswordDocument);
};
export const UpdateUsernameDocument = gql`
    mutation updateUsername($newUsername: String!) {
  userUpdateUsername(newUsername: $newUsername) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;

export function useUpdateUsernameMutation() {
  return Urql.useMutation<UpdateUsernameMutation, UpdateUsernameMutationVariables>(UpdateUsernameDocument);
};
export const MeDocument = gql`
    query me {
  me {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};