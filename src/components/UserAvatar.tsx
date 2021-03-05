import { FC, useMemo } from "react";
import { Avatar, ThemeUIStyleObject } from "theme-ui";

import { UserFieldsFragment } from "../graphql";
import { generateAvatarSvg } from "../util/generate-avatar";

type Props = {
  size: number;
  user?: UserFieldsFragment | null;
  sx?: ThemeUIStyleObject;
};

export const UserAvatar: FC<Props> = ({ size, user, ...props }) => {
  const src = useMemo(() => generateAvatarSvg(user?.id || ""), [user?.id]);

  return <Avatar src={src} sx={{ width: size, height: size }} {...props} />;
};
