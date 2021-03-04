/** @jsxImportSource theme-ui */
import { NavLink, NavLinkProps } from "react-router-dom";
import { Box, Divider, Flex, Heading } from "theme-ui";

import { useMeQuery } from "../graphql";
import { UserAvatar } from "./UserAvatar";

const sideNavRoutes: NavLinkProps[] = [
  { to: "/", exact: true, children: "Home" },
  { to: "/settings", exact: false, children: "Settings" },
];

export const SideNav = () => {
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
      <Box sx={{ position: "sticky", my: 3 }}>
        <Flex sx={{ alignItems: "center", mx: 3 }}>
          <UserAvatar user={data?.me} size={48} sx={{ mr: 2 }} />
          <Heading as="h3">{data?.me?.username}</Heading>
          <Heading as="h3" sx={{ color: "textMuted", fontWeight: "body" }}>
            #{data?.me?.discriminator}
          </Heading>
        </Flex>

        <Divider my={3} />

        <Box as="nav" mx={3}>
          {sideNavRoutes.map((route, index) => (
            <NavLink
              key={index}
              {...route}
              sx={{ variant: "links.nav", my: 1, display: "inherit" }}
            />
          ))}
        </Box>
      </Box>
    </aside>
  );
};
