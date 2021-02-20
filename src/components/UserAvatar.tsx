import { FC } from "react";
import { Avatar, ThemeUIStyleObject } from "theme-ui";

import { generateAvatarSvg } from "../util/generate-avatar";

type Props = {
  size: number;
  sx?: ThemeUIStyleObject;
  userId?: string;
};

export const UserAvatar: FC<Props> = ({ size, userId, ...props }) => {
  const src = generateAvatarSvg(`${userId}`);

  return <Avatar src={src} sx={{ width: size, height: size }} {...props} />;
};
