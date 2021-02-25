/** @jsxImportSource theme-ui */
import { FC } from "react";
import { NavLinkProps, Redirect, Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Box, Divider, Flex, Grid, Heading } from "theme-ui";

import { TopNav } from "./components/TopNav";
import { UserAvatar } from "./components/UserAvatar";
import { useMeQuery } from "./graphql";
import { Settings } from "./pages/Settings";

const sidebarRoutes: NavLinkProps[] = [
  { to: "/", exact: true, children: "Home" },
  { to: "/settings", exact: false, children: "Settings" },
];

const Sidebar = () => {
  const [meQuery] = useMeQuery();

  const { data } = meQuery;

  return (
    <aside
      sx={{
        borderRight: "solid",
        borderRightColor: "border",
        borderRightWidth: 1,
      }}
    >
      <Box sx={{ position: "sticky", top: 5 }}>
        <Flex mx={3} sx={{ alignItems: "center" }}>
          <UserAvatar size={48} user={data?.me} sx={{ mr: 2 }} />
          <Heading as="h3">{data?.me?.username}</Heading>
          <Heading as="h3" sx={{ color: "textMuted", fontWeight: "body" }}>
            #{data?.me?.discriminator}
          </Heading>
        </Flex>

        <Divider my={3} />

        <Box mx={3}>
          <nav>
            {sidebarRoutes.map((route, index) => (
              <NavLink
                key={index}
                to={route.to}
                exact={route.exact}
                sx={{ variant: "links.nav", my: 1, display: "inherit" }}
              >
                {route.children}
              </NavLink>
            ))}
          </nav>
        </Box>
      </Box>
    </aside>
  );
};

const Main: FC = ({ children }) => (
  <main
    sx={{
      display: "inherit",
      minHeight: "inherit",
      minWidth: 320,
      width: "100%",
    }}
  >
    {children}
  </main>
);

const PrivateAppLayout: FC = ({ children }) => (
  // TODO: Fix gap at bottom of page on Safari
  <Grid
    columns={["auto"]}
    gap="0px"
    sx={{
      minHeight: "100vh",
      width: "100vw",
      gridTemplateRows: "50px auto",
    }}
  >
    <TopNav />
    <Grid columns={["280px 1fr"]} gap="0px">
      <Sidebar />
      <Main>{children}</Main>
    </Grid>
  </Grid>
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
