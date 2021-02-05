/** @jsxImportSource theme-ui */
import { FC, Fragment } from "react";
import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import {
  Avatar,
  Card,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Text,
} from "theme-ui";

import { useUserStore } from "../stores/user";

const settingsRoutes = [{ to: "/profile", display: "Profile" }];

const SettingsSidebar = () => {
  const { url } = useRouteMatch();

  return (
    <Card as="nav" sx={{ display: "block", m: 0, p: 0 }}>
      <Text sx={{ px: 3, py: 2, fontWeight: "bold", display: "inherit" }}>
        Account settings
      </Text>
      <nav>
        {settingsRoutes.map((route, index) => (
          <Fragment key={index}>
            <Divider />
            <NavLink
              to={`${url}${route.to}`}
              sx={{
                variant: "links.menu",
                px: 3,
                py: 2,
                display: "inherit",
              }}
            >
              {route.display}
            </NavLink>
          </Fragment>
        ))}
      </nav>
    </Card>
  );
};

const SettingsLayout: FC = ({ children }) => {
  const [user, getAvatar, getDiscriminator] = useUserStore((state) => [
    state.user,
    state.getAvatar,
    state.getDiscriminator,
  ]);

  return (
    <Container sx={{ maxWidth: 980, pt: 20 }}>
      <Flex sx={{ mb: 4 }}>
        <Avatar src={getAvatar()} sx={{ width: 64, height: 64, mr: 3 }} />
        <Heading>{user?.username}</Heading>
        <Heading sx={{ color: "mutedText", fontWeight: "body" }}>
          #{getDiscriminator()}
        </Heading>
      </Flex>

      <Grid gap={3} columns={["1fr 3fr"]}>
        <SettingsSidebar />
        <Container>{children}</Container>
      </Grid>
    </Container>
  );
};

export const Settings = () => {
  const { path } = useRouteMatch();

  return (
    <SettingsLayout>
      <Switch>
        <Route exact path={`${path}/profile`}></Route>
        <Route path={`${path}`}>
          <Redirect to={`${path}/profile`} />
        </Route>
      </Switch>
    </SettingsLayout>
  );
};
