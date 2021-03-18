import { FC, useState } from "react";
import { GrMoreVertical } from "react-icons/gr";
import { Avatar, Box, Divider, Flex, Heading, IconButton } from "theme-ui";

import { useFriendshipsQuery, UserFieldsFragment } from "../graphql";
import { useGeneratedAvatar } from "../hooks";

export const FriendsList = () => {
  const [friendshipsQuery] = useFriendshipsQuery();

  const { data } = friendshipsQuery;

  return (
    <>
      {data?.me?.friendships.map((friendship) =>
        friendship.users.map(
          (friend) =>
            data.me?.id !== friend.id && <FriendsListItem user={friend} />
        )
      )}
    </>
  );
};

type FriendsListItemProps = {
  user: UserFieldsFragment;
};

const FriendsListItem: FC<FriendsListItemProps> = ({ user }) => {
  const [viewing, setViewing] = useState(false);

  return (
    <>
      <Divider />
      <Flex
        sx={{ p: 3, borderRadius: 4, ":hover": { bg: "muted" } }}
        onMouseEnter={() => setViewing(true)}
        onMouseLeave={() => setViewing(false)}
      >
        <Avatar
          src={useGeneratedAvatar(user.id)}
          sx={{ width: 48, height: 48, mr: 3 }}
        />
        <Box>
          <Flex mb={2}>
            <Heading as="h3">{user.username}</Heading>
            {viewing && (
              <Heading as="h3" sx={{ color: "textMuted", fontWeight: "body" }}>
                {user.discriminator}
              </Heading>
            )}
          </Flex>

          {user.status && `${user.status.emoji} ${user.status.message}`}
        </Box>

        <Flex
          sx={{ alignItems: "center", flex: 1, justifyContent: "flex-end" }}
        >
          <IconButton sx={{ fontSize: 3 }}>
            <GrMoreVertical />
          </IconButton>
        </Flex>
      </Flex>
    </>
  );
};
