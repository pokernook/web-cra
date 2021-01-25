/** @jsxImportSource theme-ui */
import { FC } from "react";
import { Avatar, Flex, Link } from "theme-ui";

import { useUserStore } from "../../stores/user";

const Sidebar = () => {
  const [user, getAvatar, logOut] = useUserStore((state) => [
    state.user,
    state.getAvatar,
    state.logOut,
  ]);

  return (
    <aside
      sx={{
        bg: "muted",
        flexGrow: 1,
        flexBasis: "sidebar",
        minHeight: "100vh",
      }}
    >
      <Flex>
        <Avatar
          alt="Avatar"
          src={getAvatar()}
          sx={{
            bg: "black",
            width: 40,
            height: 40,
          }}
        />
        <pre>
          {user?.username}#{user?.discriminator?.toString().padStart(4, "0")}
        </pre>
      </Flex>
      <Link onClick={logOut}>Log out</Link>
    </aside>
  );
};

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
      <main sx={{ flex: "1 1 auto", width: "100%" }}>{children}</main>
      <Footer />
    </div>
  </div>
);
