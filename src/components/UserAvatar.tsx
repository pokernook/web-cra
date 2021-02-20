import { FC } from "react";
import { Avatar, ThemeUIStyleObject } from "theme-ui";

import { UserFieldsFragment } from "../graphql";
import { generateAvatarSvg } from "../util/generate-avatar";

type Props = {
  size: number;
  sx?: ThemeUIStyleObject;
  user?: UserFieldsFragment | null;
};

export const UserAvatar: FC<Props> = ({ size, user, ...props }) => {
  const src = generateAvatarSvg(`${user?.id}`);

  return <Avatar src={src} sx={{ width: size, height: size }} {...props} />;
};
