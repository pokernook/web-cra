/** @jsxImportSource theme-ui */
import { FC, Fragment } from "react";
import {
  NavLink,
  NavLinkProps,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import {
  Avatar,
  Box,
  Card,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Text,
} from "theme-ui";

import { useMeQuery } from "../graphql";
import { generateAvatarSvg } from "../util/generate-avatar";
import { AccountSettings } from "./AccountSettings";
import { ProfileSettings } from "./ProfileSettings";

const settingsRoutes: NavLinkProps[] = [
  { to: "/profile", children: "Profile" },
  { to: "/account", children: "Account" },
];

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
              {route.children}
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
      <Flex mb={4}>
        <Avatar
          src={generateAvatarSvg(`${data?.me?.id}`)}
          sx={{ width: 64, height: 64, mr: 3 }}
        />
        <Box>
          <Flex mb={1}>
            <Heading>{data?.me?.username}</Heading>
            <Heading sx={{ color: "mutedText", fontWeight: "body" }}>
              #{data?.me?.discriminator}
            </Heading>
          </Flex>

          <Flex>
            <Text>{data?.me?.status?.message}</Text>
          </Flex>
        </Box>
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
        <Route exact path={`${path}/account`}>
          <AccountSettings />
        </Route>
        <Route path={`${path}`}>
          <Redirect to={`${path}/profile`} />
        </Route>
      </Switch>
    </SettingsLayout>
  );
};
