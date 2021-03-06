import { FC } from "react";
import { Avatar, ThemeUIStyleObject } from "theme-ui";

type Props = {
  size: number;
  src: string;
  sx?: ThemeUIStyleObject;
};

export const UserAvatar: FC<Props> = ({ size, src, ...props }) => (
  <Avatar src={src} sx={{ width: size, height: size }} {...props} />
);
