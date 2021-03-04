import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Card, Divider, Flex, Heading, Image, Text } from "theme-ui";

import logo from "../assets/logo.svg";
import {
  useClearStatusMutation,
  useLogOutMutation,
  useMeQuery,
} from "../graphql";
import { ModalPortal } from "./Modal";
import { SetStatusModal } from "./SetStatusModal";
import { UserAvatar } from "./UserAvatar";

const UserMenu = () => {
  const [meQuery] = useMeQuery();
  const [, clearStatus] = useClearStatusMutation();
  const [, logOut] = useLogOutMutation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { data } = meQuery;

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  const handleStatusModal = () => {
    closeMenu();
    setModalOpen(true);
  };

  const handleClearStatus = () => {
    closeMenu();
    clearStatus();
  };

  const handleLogOut = () => logOut();

  return (
    <>
      <Button variant="unstyled" onClick={openMenu}>
        <UserAvatar user={data?.me} size={32} />
      </Button>

      {menuOpen && (
        <ModalPortal close={closeMenu} fadeBackground={false}>
          <Card
            variant="menu"
            sx={{ position: "absolute", right: 24, top: 40 }}
          >
            <Flex sx={{ alignItems: "center", px: 3, py: 1 }}>
              <UserAvatar user={data?.me} size={40} sx={{ mr: 2 }} />
              <Heading as="h3">{data?.me?.username}</Heading>
              <Heading as="h3" sx={{ color: "textMuted", fontWeight: "body" }}>
                #{data?.me?.discriminator}
              </Heading>
            </Flex>

            <Flex px={3} py={1}>
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
            </Flex>

            {data?.me?.status && (
              <Button onClick={handleClearStatus} variant="menu">
                Clear status
              </Button>
            )}

            <Divider my={2} />

            <Button onClick={closeMenu} variant="menu">
              Edit profile
            </Button>
            <Button onClick={closeMenu} variant="menu">
              View profile
            </Button>
            <Button onClick={closeMenu} variant="menu">
              Settings
            </Button>

            <Divider my={2} />

            <Button onClick={handleLogOut} variant="menu">
              Log out of PokerNook
            </Button>
          </Card>
        </ModalPortal>
      )}

      {modalOpen && <SetStatusModal closeModal={() => setModalOpen(false)} />}
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
