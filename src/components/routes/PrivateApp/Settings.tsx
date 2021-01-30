/** @jsxImportSource theme-ui */
import { FC } from "react";
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

import { useUserStore } from "../../../stores/user";

const settingsRoutes = [{ to: "/profile", display: "Profile" }];

const SettingsLayout: FC = ({ children }) => {
  const { url } = useRouteMatch();
  const [user, getAvatar] = useUserStore((state) => [
    state.user,
    state.getAvatar,
  ]);

  return (
    <Container sx={{ maxWidth: 980, pt: 20 }}>
      <Flex sx={{ mb: 4 }}>
        <Avatar src={getAvatar()} sx={{ width: 64, height: 64, mr: 3 }} />
        <Heading>{user?.username}</Heading>
        <Heading sx={{ color: "mutedText", fontWeight: "body" }}>
          #{user?.discriminator?.toString().padStart(4, "0")}
        </Heading>
      </Flex>

      <Grid gap={3} columns={["1fr 3fr"]}>
        <Card as="nav" sx={{ display: "block", m: 0, p: 0 }}>
          <Text
            sx={{
              px: 3,
              py: 2,
              fontWeight: "bold",
              display: "inherit",
            }}
          >
            Account settings
          </Text>

          <nav>
            {settingsRoutes.map((route, index) => (
              <>
                <Divider />
                <NavLink
                  key={index}
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
              </>
            ))}
          </nav>
        </Card>
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
        <Route exact path={path}>
          <Redirect to={`${path}/profile`} />
        </Route>
      </Switch>
    </SettingsLayout>
  );
};
