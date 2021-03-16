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
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: any;
  /** One emoji character */
  EmojiSingular: any;
  DateTime: any;
};


export type FriendRequest = {
  __typename?: 'FriendRequest';
  createdAt: Scalars['DateTime'];
  from: User;
  id: Scalars['String'];
  status: FriendRequestStatus;
  to: User;
  updatedAt: Scalars['DateTime'];
};

export type Friendship = {
  __typename?: 'Friendship';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  users: Array<User>;
};


export type FriendshipUsersArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<UserWhereUniqueInput>;
};


export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  discriminator: Scalars['Int'];
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  friendships: Array<Friendship>;
  friendRequestsReceived: Array<FriendRequest>;
  friendRequestsSent: Array<FriendRequest>;
  id: Scalars['String'];
  status?: Maybe<UserStatus>;
  username: Scalars['String'];
};


export type UserFriendshipsArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<FriendshipWhereUniqueInput>;
};


export type UserFriendRequestsReceivedArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<FriendRequestWhereUniqueInput>;
};


export type UserFriendRequestsSentArgs = {
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  cursor?: Maybe<FriendRequestWhereUniqueInput>;
};

export type UserAuthPayload = {
  __typename?: 'UserAuthPayload';
  user?: Maybe<User>;
};

export type UserLogOutPayload = {
  __typename?: 'UserLogOutPayload';
  sessionId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UserStatus = {
  __typename?: 'UserStatus';
  createdAt: Scalars['DateTime'];
  emoji?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
};


export enum FriendRequestStatus {
  Pending = 'PENDING',
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED'
}

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  Tag?: Maybe<UserTagCompoundUniqueInput>;
};

export type FriendshipWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type FriendRequestWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  fromId_toId?: Maybe<FriendRequestFromIdToIdCompoundUniqueInput>;
};

export type UserTagCompoundUniqueInput = {
  username: Scalars['String'];
  discriminator: Scalars['Int'];
};

export type FriendRequestFromIdToIdCompoundUniqueInput = {
  fromId: Scalars['String'];
  toId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  friendRequestSend?: Maybe<FriendRequest>;
  friendRequestAccept?: Maybe<FriendRequest>;
  friendRequestReject?: Maybe<FriendRequest>;
  userSignUp?: Maybe<UserAuthPayload>;
  userLogIn?: Maybe<UserAuthPayload>;
  userLogOut?: Maybe<UserLogOutPayload>;
  userUpdateUsername?: Maybe<User>;
  userUpdatePassword?: Maybe<User>;
  userUpdateEmail?: Maybe<User>;
  userDeleteAccount?: Maybe<User>;
  userStatusSet?: Maybe<UserStatus>;
  userStatusClear?: Maybe<UserStatus>;
};


export type MutationFriendRequestSendArgs = {
  username: Scalars['String'];
  discriminator: Scalars['Int'];
};


export type MutationFriendRequestAcceptArgs = {
  friendRequestId: Scalars['String'];
};


export type MutationFriendRequestRejectArgs = {
  friendRequestId: Scalars['String'];
};


export type MutationUserSignUpArgs = {
  email: Scalars['EmailAddress'];
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUserLogInArgs = {
  email: Scalars['EmailAddress'];
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
  password: Scalars['String'];
  newEmail: Scalars['EmailAddress'];
};


export type MutationUserStatusSetArgs = {
  emoji?: Maybe<Scalars['EmojiSingular']>;
  message?: Maybe<Scalars['String']>;
};

export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'createdAt' | 'email' | 'emailVerified' | 'username' | 'discriminator'>
  & { status?: Maybe<(
    { __typename?: 'UserStatus' }
    & Pick<UserStatus, 'id' | 'emoji' | 'message'>
  )> }
);

export type DeleteAccountMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteAccountMutation = (
  { __typename?: 'Mutation' }
  & { userDeleteAccount?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export type FriendRequestSendMutationVariables = Exact<{
  username: Scalars['String'];
  discriminator: Scalars['Int'];
}>;


export type FriendRequestSendMutation = (
  { __typename?: 'Mutation' }
  & { friendRequestSend?: Maybe<(
    { __typename?: 'FriendRequest' }
    & Pick<FriendRequest, 'createdAt' | 'id' | 'status' | 'updatedAt'>
    & { from: (
      { __typename?: 'User' }
      & UserFieldsFragment
    ), to: (
      { __typename?: 'User' }
      & UserFieldsFragment
    ) }
  )> }
);

export type LogInMutationVariables = Exact<{
  email: Scalars['EmailAddress'];
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

export type SignUpMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['EmailAddress'];
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

export type StatusClearMutationVariables = Exact<{ [key: string]: never; }>;


export type StatusClearMutation = (
  { __typename?: 'Mutation' }
  & { userStatusClear?: Maybe<(
    { __typename?: 'UserStatus' }
    & Pick<UserStatus, 'id'>
  )> }
);

export type StatusSetMutationVariables = Exact<{
  emoji?: Maybe<Scalars['EmojiSingular']>;
  message?: Maybe<Scalars['String']>;
}>;


export type StatusSetMutation = (
  { __typename?: 'Mutation' }
  & { userStatusSet?: Maybe<(
    { __typename?: 'UserStatus' }
    & Pick<UserStatus, 'createdAt' | 'emoji' | 'id' | 'message' | 'updatedAt'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & UserFieldsFragment
    )> }
  )> }
);

export type UpdateEmailMutationVariables = Exact<{
  newEmail: Scalars['EmailAddress'];
  password: Scalars['String'];
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
  status {
    id
    emoji
    message
  }
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
export const FriendRequestSendDocument = gql`
    mutation friendRequestSend($username: String!, $discriminator: Int!) {
  friendRequestSend(username: $username, discriminator: $discriminator) {
    createdAt
    from {
      ...userFields
    }
    id
    status
    to {
      ...userFields
    }
    updatedAt
  }
}
    ${UserFieldsFragmentDoc}`;

export function useFriendRequestSendMutation() {
  return Urql.useMutation<FriendRequestSendMutation, FriendRequestSendMutationVariables>(FriendRequestSendDocument);
};
export const LogInDocument = gql`
    mutation logIn($email: EmailAddress!, $password: String!) {
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
export const SignUpDocument = gql`
    mutation signUp($username: String!, $email: EmailAddress!, $password: String!) {
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
export const StatusClearDocument = gql`
    mutation statusClear {
  userStatusClear {
    id
  }
}
    `;

export function useStatusClearMutation() {
  return Urql.useMutation<StatusClearMutation, StatusClearMutationVariables>(StatusClearDocument);
};
export const StatusSetDocument = gql`
    mutation statusSet($emoji: EmojiSingular, $message: String) {
  userStatusSet(emoji: $emoji, message: $message) {
    createdAt
    emoji
    id
    message
    updatedAt
    user {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;

export function useStatusSetMutation() {
  return Urql.useMutation<StatusSetMutation, StatusSetMutationVariables>(StatusSetDocument);
};
export const UpdateEmailDocument = gql`
    mutation updateEmail($newEmail: EmailAddress!, $password: String!) {
  userUpdateEmail(newEmail: $newEmail, password: $password) {
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