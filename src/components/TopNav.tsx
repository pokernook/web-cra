/** @jsxImportSource theme-ui */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Flex, Heading, Image, Text } from "theme-ui";

import logo from "../assets/logo.svg";
import {
  Menu,
  MenuButton,
  MenuCard,
  MenuItem,
  MenuSeparator,
} from "../components/Menu";
import {
  useClearStatusMutation,
  useLogOutMutation,
  useMeQuery,
} from "../graphql";
import { SetStatusModal } from "./SetStatusModal";
import { UserAvatar } from "./UserAvatar";

const UserMenu = () => {
  const [meQuery] = useMeQuery();
  const [, clearStatus] = useClearStatusMutation();
  const [, logOut] = useLogOutMutation();
  const [modalOpen, setModalOpen] = useState(false);

  const { data } = meQuery;

  return (
    <>
      <Menu trigger={<UserAvatar user={data?.me} size={32} />}>
        <MenuCard sx={{ right: 0, minWidth: 300 }}>
          <MenuItem>
            <UserAvatar user={data?.me} size={40} sx={{ mr: 2 }} />
            <Heading as="h3">{data?.me?.username}</Heading>
            <Heading as="h3" sx={{ color: "textMuted", fontWeight: "body" }}>
              #{data?.me?.discriminator}
            </Heading>
          </MenuItem>

          <MenuItem>
            <Button
              variant="tertiary"
              sx={{ width: "100%", textAlign: "left", bg: "background" }}
              onClick={() => setModalOpen(true)}
            >
              {data?.me?.status ? (
                <Text>
                  {data.me.status.emoji} {data.me.status.message}
                </Text>
              ) : (
                <Text color="textMuted">Update status</Text>
              )}
            </Button>
          </MenuItem>

          {data?.me?.status && (
            <MenuButton onClick={() => clearStatus()}>Clear status</MenuButton>
          )}

          <MenuSeparator />

          <MenuButton>Edit profile</MenuButton>
          <MenuButton>View profile</MenuButton>
          <MenuButton>Settings</MenuButton>

          <MenuSeparator />

          <MenuButton onClick={() => logOut()}>Log out of PokerNook</MenuButton>
        </MenuCard>
      </Menu>

      <SetStatusModal open={modalOpen} closeModal={() => setModalOpen(false)} />
    </>
  );
};

export const TopNav = () => (
  <Flex
    as="header"
    sx={{
      alignItems: "center",
      bg: "background",
      position: "sticky",
      top: 0,
      borderBottom: "solid",
      borderBottomColor: "border",
      borderBottomWidth: 1,
      zIndex: 1,
    }}
  >
    <Flex sx={{ flex: 1, justifyContent: "flex-start", mx: 4 }} />

    <Flex sx={{ flex: 1, justifyContent: "center" }}>
      <NavLink to="/">
        <Image src={logo} height={56} width={56} />
      </NavLink>
    </Flex>

    <Flex sx={{ flex: 1, justifyContent: "flex-end", mx: 4 }}>
      <UserMenu />
    </Flex>
  </Flex>
);
