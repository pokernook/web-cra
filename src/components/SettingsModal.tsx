/** @jsxImportSource theme-ui */
import { FC } from "react";
import {
  MemoryRouter,
  NavLink,
  NavLinkProps,
  Redirect,
  Route,
} from "react-router-dom";
import { Box, Grid } from "theme-ui";

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

        {/* TODO: Show divider between header and content on scroll */}

        <MemoryRouter>
          <ModalContent>
            <Grid
              gap={3}
              columns={[2, "2fr 5fr"]}
              sx={{ height: 450, width: 650 }}
            >
              <SettingsNav />
              <SettingsRoutes />
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
  <Box>
    {settingsNavLinks.map((route, index) => (
      <NavLink key={index} {...route} sx={{ variant: "links.nav", my: 1 }} />
    ))}
  </Box>
);

// TODO: Scroll bar should be flush with right side of modal
const SettingsRoutes = () => (
  <Box sx={{ overflow: "auto" }}>
    <Route exact path="/settings/account">
      Account settings
    </Route>

    <Route>
      <Redirect to="/settings/account" />
    </Route>
  </Box>
);
