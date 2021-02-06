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

import { useMeQuery } from "../graphql/types";
import { generateAvatarSvg } from "../util/generate-avatar";
import { ProfileSettings } from "./ProfileSettings";

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
  const [meQuery] = useMeQuery();

  const { data } = meQuery;

  return (
    <Container sx={{ maxWidth: 980, pt: 20 }}>
      <Flex sx={{ mb: 4 }}>
        <Avatar
          src={generateAvatarSvg(`${data?.me?.id}`)}
          sx={{ width: 64, height: 64, mr: 3 }}
        />
        <Heading>{data?.me?.username}</Heading>
        <Heading sx={{ color: "mutedText", fontWeight: "body" }}>
          #{data?.me?.discriminator.toString().padStart(4, "0")}
        </Heading>
      </Flex>

      <Grid gap={3} columns={["1fr 3fr"]} sx={{ alignItems: "start" }}>
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
        <Route exact path={`${path}/profile`}>
          <ProfileSettings />
        </Route>
        <Route path={`${path}`}>
          <Redirect to={`${path}/profile`} />
        </Route>
      </Switch>
    </SettingsLayout>
  );
};
