/** @jsxImportSource theme-ui */
import { FC } from "react";
import { Avatar, Flex } from "theme-ui";

import { useUserStore } from "../../stores/user";

const Sidebar = () => {
  const [user, getAvatar] = useUserStore((state) => [
    state.user,
    state.getAvatar,
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
          {user?.username}#{user?.discriminator}
        </pre>
      </Flex>
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
