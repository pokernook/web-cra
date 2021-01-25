/** @jsxImportSource theme-ui */
import { FC } from "react";
import { Avatar, Container, Flex, Link } from "theme-ui";

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
        flexGrow: 1,
        flexBasis: "sidebar",
        minHeight: "inherit",
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

const Main: FC = ({ children }) => (
  <main
    sx={{
      display: "inherit",
      flex: "1 1 auto",
      flexGrow: 99999,
      flexBasis: 0,
      minHeight: "inherit",
      minWidth: 320,
      width: "100%",
    }}
  >
    {children}
  </main>
);

export const Helm: FC = ({ children }) => (
  <Container
    sx={{
      display: "flex",
      flexWrap: "nowrap",
      maxWidth: 1450,
      minHeight: "100vh",
    }}
  >
    <Sidebar />
    <Main>{children}</Main>
  </Container>
);
