/** @jsxImportSource theme-ui */
import { FC } from "react";

const Sidebar = () => (
  <aside
    sx={{
      bg: "muted",
      borderRadius: 0,
      borderRight: "solid",
      borderRightColor: "border",
      borderRightWidth: 1,
      flexGrow: 1,
      flexBasis: "sidebar",
      minHeight: "100vh",
    }}
  ></aside>
);

const Header = () => <header sx={{ width: "100%" }}></header>;

const Footer = () => <footer sx={{ width: "100%" }}></footer>;

export const Helm: FC = ({ children }) => (
  <div sx={{ display: "flex", flexWrap: "wrap" }}>
    <Sidebar />
    <div
      sx={{
        display: "inherit",
        flexDirection: "column",
        flexGrow: 99999,
        flexBasis: 0,
        minHeight: "100vh",
        minWidth: 320,
      }}
    >
      <Header />
      <main sx={{ flex: "1 1 auto", width: "100%" }}>{children}</main>
      <Footer />
    </div>
  </div>
);
