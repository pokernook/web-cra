/** @jsxImportSource theme-ui */
import { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Grid } from "theme-ui";

import { SideNav } from "./components/SideNav";
import { TopNav } from "./components/TopNav";
import { Settings } from "./pages/Settings";

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
      <SideNav />
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
