/** @jsxImportSource theme-ui */
import { FC } from "react";
import { FiLogOut } from "react-icons/fi";
import { NavLinkProps, Redirect, Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Avatar, Box, Button, Container, Divider, Flex, Text } from "theme-ui";

import { useLogOutMutation, useMeQuery } from "./graphql/types";
import { Settings } from "./pages/Settings";
import { generateAvatarSvg } from "./util/generate-avatar";

const sidebarRoutes: NavLinkProps[] = [
  { to: "/", exact: true, children: "Home" },
  { to: "/settings", exact: false, children: "Settings" },
];

const Sidebar = () => {
  const [meQuery, reexecuteMeQuery] = useMeQuery();
  const [, logOut] = useLogOutMutation();

  const { data } = meQuery;

  const handleLogOut = async () => {
    await logOut();
    reexecuteMeQuery({ requestPolicy: "network-only" });
  };

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
      <Box sx={{ mx: 4, position: "sticky", top: 4 }}>
        <Flex>
          <Avatar
            src={generateAvatarSvg(`${data?.me?.id}`)}
            sx={{ width: 36, height: 36, mr: 2 }}
          />
          <Text sx={{ fontWeight: "bold" }}>{data?.me?.username}</Text>
          <Text sx={{ color: "mutedText" }}>#{data?.me?.discriminator}</Text>
        </Flex>

        <Divider sx={{ my: 3 }} />

        <nav>
          {sidebarRoutes.map((route, index) => (
            <NavLink
              key={index}
              to={route.to}
              exact={route.exact}
              sx={{ variant: "links.nav", p: 2, my: 1, display: "inherit" }}
            >
              {route.children}
            </NavLink>
          ))}
        </nav>

        <Divider sx={{ my: 3 }} />

        <Box>
          <Text sx={{ display: "inherit", fontWeight: "bold", mb: 2 }}>
            Need to run?
          </Text>
          <Button variant="tertiary" onClick={handleLogOut}>
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

const PrivateAppLayout: FC = ({ children }) => (
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

export const PrivateApp = () => (
  <PrivateAppLayout>
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  </PrivateAppLayout>
);
