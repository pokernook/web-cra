/** @jsxImportSource theme-ui */
import { NavLink } from "react-router-dom";
import { Image } from "theme-ui";

import logo from "../assets/logo.svg";

export const TopNav = () => (
  <header
    sx={{
      alignItems: "center",
      justifyContent: "center",
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
    <NavLink to="/">
      <Image src={logo} height={56} width={56} />
    </NavLink>
  </header>
);
