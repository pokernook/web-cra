/** @jsxImportSource theme-ui */
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Avatar, Container, Text } from "theme-ui";

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
        display: "inline-block",
      }}
    >
      <ul sx={{ listStyle: "none" }}>
        <li>
          <NavLink to="/" sx={{ variant: "links.nav" }}>
            <Avatar
              src={getAvatar()}
              sx={{
                bg: "black",
                width: 36,
                height: 36,
                mr: 3,
              }}
            />
            <Text sx={{ fontSize: 2 }}>{user?.username}</Text>
            <Text sx={{ fontSize: 2, color: "mutedText" }}>
              #{user?.discriminator?.toString().padStart(4, "0")}
            </Text>
          </NavLink>
        </li>

        <li>
          <NavLink to="/" sx={{ variant: "links.nav" }} onClick={logOut}>
            <Text sx={{ fontSize: 2 }}>Log out</Text>
          </NavLink>
        </li>
      </ul>
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
