/** @jsxImportSource theme-ui */
import { NavLink } from "react-router-dom";
import { Flex, Image } from "theme-ui";

import logo from "../assets/logo.svg";

export const TopNav = () => {
  return (
    <header
      sx={{
        alignItems: "center",
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

      <Flex sx={{ flex: 1, justifyContent: "flex-end", mx: 4 }} />
    </header>
  );
};
