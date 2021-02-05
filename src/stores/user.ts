import create from "zustand";

import { User as GraphQLUser } from "../graphql/types";
import { generateAvatarSvg } from "../util/generate-avatar";

type User = Partial<GraphQLUser> | undefined | null;

type State = {
  user: User;
  setUser: (user: User) => void;
  removeUser: () => void;
  getAvatar: () => string;
  getDiscriminator: () => string;
};

export const useUserStore = create<State>((set, get) => ({
  user: undefined,
  setUser: (user) => set({ user }),
  removeUser: () => set({ user: null }),
  getAvatar: () => generateAvatarSvg(`${get().user?.id}`),
  getDiscriminator: () =>
    `${get().user?.discriminator?.toString().padStart(4, "0")}`,
}));
