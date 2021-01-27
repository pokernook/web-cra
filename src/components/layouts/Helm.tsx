/** @jsxImportSource theme-ui */
import { FC } from "react";
import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { Avatar, Container, Divider, Flex } from "theme-ui";

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
        borderRight: "solid",
        borderRightColor: "border",
        borderRightWidth: 1,
        flexGrow: 1,
        flexBasis: "sidebar",
        minHeight: "inherit",
      }}
    >
      <Flex sx={{ mx: 4, mt: 4 }}>
        <Avatar
          src={getAvatar()}
          sx={{ bg: "black", width: 36, height: 36, mr: 2 }}
        />
        <NavLink to="/profile" sx={{ variant: "styles.a" }}>
          {user?.username}#{user?.discriminator?.toString().padStart(4, "0")}
        </NavLink>
      </Flex>

      <Divider />

      <ul sx={{ listStyle: "none" }}>
        <li sx={{ py: 2 }}>
          <Flex>
            <NavLink to="/logOut" onClick={logOut} sx={{ variant: "styles.a" }}>
              <FiLogOut
                sx={{ color: "text", mr: 2, verticalAlign: "middle" }}
              />
              Log out
            </NavLink>
          </Flex>
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
      maxWidth: "100%",
      minHeight: "100vh",
    }}
  >
    <Sidebar />
    <Main>{children}</Main>
  </Container>
);
