import { FC } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { Container } from "theme-ui";

const SettingsLayout: FC = ({ children }) => (
  <Container sx={{ maxWidth: 980, pt: 20 }}>{children}</Container>
);

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
