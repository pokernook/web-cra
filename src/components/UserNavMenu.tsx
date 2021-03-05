import { FC, useState } from "react";
import { Button, Card, Divider, Flex, Heading, Text } from "theme-ui";

import {
  useClearStatusMutation,
  useLogOutMutation,
  useMeQuery,
} from "../graphql";
import { ModalPortal } from "./Modal";
import { SetStatusModal } from "./SetStatusModal";
import { UserAvatar } from "./UserAvatar";

export const UserNavMenu: FC = () => {
  const [meQuery] = useMeQuery();
  const [, clearStatus] = useClearStatusMutation();
  const [, logOut] = useLogOutMutation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [statusModalOpen, setStatusModalOpen] = useState(false);

  const { data } = meQuery;

  const handleLogOut = () => logOut();

  const openStatusModal = () => {
    setMenuOpen(false);
    setStatusModalOpen(true);
  };

  const handleClearStatus = () => {
    setMenuOpen(false);
    clearStatus();
  };

  return (
    <>
      <Button variant="unstyled" onClick={() => setMenuOpen(true)}>
        <UserAvatar user={data?.me} size={32} />
      </Button>

      {menuOpen && (
        <ModalPortal onClose={() => setMenuOpen(false)}>
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
                onClick={openStatusModal}
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

            <Button onClick={() => setMenuOpen(false)} variant="menu">
              Edit profile
            </Button>
            <Button onClick={() => setMenuOpen(false)} variant="menu">
              View profile
            </Button>
            <Button onClick={() => setMenuOpen(false)} variant="menu">
              Settings
            </Button>

            <Divider my={2} />

            <Button onClick={handleLogOut} variant="menu">
              Log out of PokerNook
            </Button>
          </Card>
        </ModalPortal>
      )}

      {statusModalOpen && (
        <SetStatusModal onClose={() => setStatusModalOpen(false)} />
      )}
    </>
  );
};
