/** @jsxImportSource theme-ui */
import { NavLink } from "react-router-dom";
import { Flex, Image } from "theme-ui";

import logo from "../assets/logo.svg";
import { Menu } from "../components/Menu";
import { useMeQuery } from "../graphql";
import { UserAvatar } from "./UserAvatar";

export const TopNav = () => {
  const [meQuery] = useMeQuery();
  const { data } = meQuery;

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
        <Menu prompt={<UserAvatar user={data?.me} size={36} />} />
      </Flex>
    </header>
  );
};
