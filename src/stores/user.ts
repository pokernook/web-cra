import { CombinedError } from "urql";
import create from "zustand";

import { client } from "../graphql/client";
import {
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
} from "../graphql/types";
import { generateAvatarSvg } from "../util/generate-avatar";

type State = {
  user: Partial<User> | undefined | null;
  authError: CombinedError | undefined | null;
  fetchingSession: boolean;
  getAvatar: () => string;
  clearAuthError: () => void;
  signUp: (data: SignUpMutationVariables) => void;
  logIn: (data: LogInMutationVariables) => void;
  logOut: () => void;
  checkSession: () => void;
};

export const useUserStore = create<State>((set, get) => ({
  user: undefined,
  authError: undefined,
  fetchingSession: false,
  getAvatar: () => generateAvatarSvg(`${get().user?.id}`),
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
    set({ fetchingSession: true });
    const result = await client.query<MeQuery>(MeDocument).toPromise();
    set({ fetchingSession: false, user: result.data?.me });
  },
}));
