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
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { data } = meQuery;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleStatusModal = () => {
    toggleMenu();
    setModalOpen(true);
  };

  const handleClearStatus = () => {
    toggleMenu();
    clearStatus();
  };

  const handleLogOut = () => logOut();

  return (
    <>
      <Button variant="unstyled" onClick={toggleMenu}>
        <UserAvatar user={data?.me} size={32} />
      </Button>

      <Menu toggle={toggleMenu} open={menuOpen}>
        <MenuCard sx={{ right: 0, top: 36, minWidth: 300 }}>
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
              onClick={handleStatusModal}
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
            <MenuButton onClick={handleClearStatus}>Clear status</MenuButton>
          )}

          <MenuSeparator />

          <MenuButton>Edit profile</MenuButton>
          <MenuButton>View profile</MenuButton>
          <MenuButton>Settings</MenuButton>

          <MenuSeparator />

          <MenuButton onClick={handleLogOut}>Log out of PokerNook</MenuButton>
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
