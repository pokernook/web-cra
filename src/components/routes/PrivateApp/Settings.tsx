import { FC } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { Avatar, Container, Flex, Heading } from "theme-ui";

import { useUserStore } from "../../../stores/user";

const SettingsLayout: FC = ({ children }) => {
  const [user, getAvatar] = useUserStore((state) => [
    state.user,
    state.getAvatar,
  ]);

  return (
    <Container sx={{ maxWidth: 980, pt: 20 }}>
      <Flex>
        <Avatar src={getAvatar()} sx={{ width: 64, height: 64, mr: 3 }} />
        <Heading>{user?.username}</Heading>
        <Heading sx={{ color: "mutedText", fontWeight: "body" }}>
          #{user?.discriminator?.toString().padStart(4, "0")}
        </Heading>
      </Flex>
      {children}
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
