import { useMemo } from "react";

import { generateAvatarSvg } from "../util/generate-avatar";

export const useGeneratedAvatar = (userId: string) =>
  useMemo(() => generateAvatarSvg(userId), [userId]);
