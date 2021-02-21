/** @jsxImportSource theme-ui */
import { NavLink } from "react-router-dom";
import { Flex, Image } from "theme-ui";

import logo from "../assets/logo.svg";
import { UserAvatar } from "../components/UserAvatar";
import { useMeQuery } from "../graphql";

export const TopNav = () => {
  const [meQuery] = useMeQuery();

  const { data } = meQuery;

  return (
    <header
      sx={{
        alignItems: "center",
        bg: "muted",
        display: "flex",
        position: "sticky",
        top: 0,
        borderBottom: "solid",
        borderBottomColor: "border",
        borderBottomWidth: 1,
        zIndex: 1,
      }}
    >
      <Flex sx={{ flex: 1, mx: 4 }} />

      <Flex sx={{ flex: 1, justifyContent: "center" }}>
        <NavLink to="/">
          <Image src={logo} height={56} width={56} />
        </NavLink>
      </Flex>

      <Flex sx={{ flex: 1, justifyContent: "flex-end", mx: 4 }}>
        <UserAvatar user={data?.me} size={36} />
      </Flex>
    </header>
  );
};
