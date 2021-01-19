import { CombinedError } from "urql";
import create from "zustand";

import {
  client,
  LogInDocument,
  LogInMutation,
  LogInMutationVariables,
  SignUpDocument,
  SignUpMutation,
  SignUpMutationVariables,
  User,
} from "../graphql";

type State = {
  user: Partial<User> | undefined | null;
  authError: CombinedError | undefined;
  signUp: (data: SignUpMutationVariables) => void;
  logIn: (data: LogInMutationVariables) => void;
};

export const useUserStore = create<State>((set) => ({
  user: undefined,
  authError: undefined,
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
}));
