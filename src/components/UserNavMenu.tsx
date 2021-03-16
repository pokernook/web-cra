import { FC, useState } from "react";
import { Avatar, Button, Heading, Text } from "theme-ui";

import {
  useLogOutMutation,
  useMeQuery,
  useStatusClearMutation,
} from "../graphql";
import { useGeneratedAvatar } from "../hooks";
import { MenuButton, MenuCard, MenuDivider, MenuItem } from "./Menu";
import { ModalPortal } from "./Modal";
import { ProfileModal } from "./ProfileModal";
import { SettingsModal } from "./SettingsModal";
import { StatusModal } from "./StatusModal";

export const UserNavMenu: FC = () => {
  const [meQuery] = useMeQuery();
  const [, clearStatus] = useStatusClearMutation();
  const [, logOut] = useLogOutMutation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);

  const { data } = meQuery;

  const generatedAvatar = useGeneratedAvatar(data?.me?.id || "");

  const handleLogOut = () => logOut();

  const openStatusModal = () => {
    setMenuOpen(false);
    setStatusModalOpen(true);
  };

  const openProfileModal = () => {
    setMenuOpen(false);
    setProfileModalOpen(true);
  };

  const openSettingsModal = () => {
    setMenuOpen(false);
    setSettingsModalOpen(true);
  };

  const handleClearStatus = () => {
    setMenuOpen(false);
    clearStatus();
  };

  return (
    <>
      {data?.me?.status && (
        <Button
          variant="unstyled"
          onClick={openStatusModal}
          sx={{ fontSize: 2, p: 2 }}
        >
          {data?.me?.status?.emoji}
        </Button>
      )}

      <Avatar
        onClick={() => setMenuOpen(true)}
        src={generatedAvatar}
        sx={{ height: 32, width: 32, ":hover": { cursor: "pointer" } }}
      />

      {menuOpen && (
        <ModalPortal onClose={() => setMenuOpen(false)}>
          <MenuCard sx={{ position: "absolute", right: 24, top: 40 }}>
            <MenuItem>
              <Avatar
                src={generatedAvatar}
                sx={{ height: 40, width: 40, mr: 2 }}
              />
              <Heading as="h3">{data?.me?.username}</Heading>
              <Heading as="h3" sx={{ color: "textMuted", fontWeight: "body" }}>
                #{data?.me?.discriminator}
              </Heading>
            </MenuItem>

            <MenuItem>
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
            </MenuItem>

            {data?.me?.status && (
              <MenuButton onClick={handleClearStatus}>Clear status</MenuButton>
            )}

            <MenuDivider />

            <MenuButton onClick={openProfileModal}>Edit profile</MenuButton>
            <MenuButton onClick={() => setMenuOpen(false)}>
              View profile
            </MenuButton>
            <MenuButton onClick={openSettingsModal}>Settings</MenuButton>

            <MenuDivider />

            <MenuButton onClick={handleLogOut}>Log out of PokerNook</MenuButton>
          </MenuCard>
        </ModalPortal>
      )}

      {statusModalOpen && (
        <StatusModal onClose={() => setStatusModalOpen(false)} />
      )}

      {profileModalOpen && (
        <ProfileModal onClose={() => setProfileModalOpen(false)} />
      )}

      {settingsModalOpen && (
        <SettingsModal onClose={() => setSettingsModalOpen(false)} />
      )}
    </>
  );
};
