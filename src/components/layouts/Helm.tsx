/** @jsxImportSource theme-ui */
import { FC } from "react";
import { FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Label,
  Text,
} from "theme-ui";

import { useUserStore } from "../../stores/user";

const sidebarRoutes = [{ to: "/settings", display: "Settings" }];

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
      <Box sx={{ mx: 4, mt: 4 }}>
        <Flex>
          <Avatar src={getAvatar()} sx={{ width: 36, height: 36, mr: 2 }} />
          <Text sx={{ fontWeight: "bold" }}>{user?.username}</Text>
          <Text sx={{ color: "mutedText" }}>
            #{user?.discriminator?.toString().padStart(4, "0")}
          </Text>
        </Flex>

        <Divider />

        <Box>
          <ul sx={{ listStyle: "none", p: 0 }}>
            {sidebarRoutes.map((route, index) => (
              <li key={index} sx={{ py: 1 }}>
                <NavLink to={route.to} sx={{ variant: "styles.a" }}>
                  {route.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </Box>

        <Divider />

        <Box>
          <Label>Need to run?</Label>
          <Button variant="secondary" onClick={logOut}>
            <FiLogOut sx={{ verticalAlign: "middle", mr: 2 }} />
            Log out
          </Button>
        </Box>
      </Box>
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
