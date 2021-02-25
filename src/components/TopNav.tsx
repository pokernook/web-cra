/** @jsxImportSource theme-ui */
import { NavLink } from "react-router-dom";
import { Button, Flex, Heading, Image } from "theme-ui";

import logo from "../assets/logo.svg";
import { Menu, MenuButton, MenuItem, MenuSeparator } from "../components/Menu";
import { useLogOutMutation, useMeQuery } from "../graphql";
import { UserAvatar } from "./UserAvatar";

export const TopNav = () => {
  const [meQuery] = useMeQuery();
  const [, logOut] = useLogOutMutation();

  const { data } = meQuery;
  const handleLogOut = () => logOut();

  return (
    <header
      sx={{
        alignItems: "center",
        display: "flex",
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
        <Menu trigger={<UserAvatar user={data?.me} size={32} />}>
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
              sx={{ width: "100%", textAlign: "left" }}
            >
              {data?.me?.status?.emoji} {data?.me?.status?.message}
            </Button>
          </MenuItem>

          <MenuButton>Clear status</MenuButton>

          <MenuSeparator />

          <MenuButton>Edit profile</MenuButton>
          <MenuButton>View profile</MenuButton>
          <MenuButton>Settings</MenuButton>

          <MenuSeparator />

          <MenuButton onClick={handleLogOut}>Log out of PokerNook</MenuButton>
        </Menu>
      </Flex>
    </header>
  );
};
