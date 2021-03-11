/** @jsxImportSource theme-ui */
import { FC } from "react";
import {
  MemoryRouter,
  NavLink,
  NavLinkProps,
  Redirect,
  Route,
} from "react-router-dom";
import { Box, Divider, Grid } from "theme-ui";

import {
  ModalCard,
  ModalClose,
  ModalContent,
  ModalHeader,
  ModalPortal,
} from "./Modal";

type Props = {
  onClose: () => void;
};

export const SettingsModal: FC<Props> = ({ onClose }) => {
  return (
    <ModalPortal onClose={onClose} hasDimmedBackground>
      <ModalCard>
        <ModalClose onClose={onClose} />
        <ModalHeader>Settings</ModalHeader>

        <Divider />

        <MemoryRouter>
          <ModalContent>
            <Grid
              gap={3}
              columns={[2, "2fr 5fr"]}
              sx={{ height: 450, width: 650, ml: 3 }}
            >
              <Box sx={{ my: 2 }}>
                <SettingsNav />
              </Box>

              <Box sx={{ overflow: "auto", py: 3, pr: 4 }}>
                <SettingsRoutes />
              </Box>
            </Grid>
          </ModalContent>
        </MemoryRouter>
      </ModalCard>
    </ModalPortal>
  );
};

const settingsNavLinks: NavLinkProps[] = [
  { to: "/settings/account", exact: true, children: "Account" },
];

const SettingsNav = () => (
  <>
    {settingsNavLinks.map((route, index) => (
      <NavLink key={index} {...route} sx={{ variant: "links.nav", my: 1 }} />
    ))}
  </>
);

const SettingsRoutes = () => (
  <>
    <Route exact path="/settings/account">
      Account settings
    </Route>

    <Route>
      <Redirect to="/settings/account" />
    </Route>
  </>
);
