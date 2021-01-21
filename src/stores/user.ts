import { CombinedError } from "urql";
import create from "zustand";

import {
  client,
  LogInDocument,
  LogInMutation,
  LogInMutationVariables,
  LogOutDocument,
  LogOutMutation,
  MeDocument,
  MeQuery,
  SignUpDocument,
  SignUpMutation,
  SignUpMutationVariables,
  User,
} from "../graphql";

type State = {
  user: Partial<User> | undefined | null;
  authError: CombinedError | undefined | null;
  clearAuthError: () => void;
  signUp: (data: SignUpMutationVariables) => void;
  logIn: (data: LogInMutationVariables) => void;
  logOut: () => void;
  checkSession: () => void;
};

export const useUserStore = create<State>((set) => ({
  user: undefined,
  authError: undefined,
  clearAuthError: () => set({ authError: null }),
  signUp: async (data) => {
    const result = await client
      .mutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, {
        ...data,
      })
      .toPromise();
    set({ authError: result.error, user: result.data?.signUp?.user });
  },
  logIn: async (data) => {
    const result = await client
      .mutation<LogInMutation, LogInMutationVariables>(LogInDocument, {
        ...data,
      })
      .toPromise();
    set({ authError: result.error, user: result.data?.logIn?.user });
  },
  logOut: async () => {
    await client.mutation<LogOutMutation>(LogOutDocument).toPromise();
    set({ user: null });
  },
  checkSession: async () => {
    const result = await client.query<MeQuery>(MeDocument).toPromise();
    set({ user: result.data?.me });
  },
}));
