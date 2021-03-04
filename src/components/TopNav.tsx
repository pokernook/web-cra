import { NavLink } from "react-router-dom";
import { Flex, Image } from "theme-ui";

import logo from "../assets/logo.svg";
import { UserNavMenu } from "./UserNavMenu";

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
      <UserNavMenu />
    </Flex>
  </Flex>
);
