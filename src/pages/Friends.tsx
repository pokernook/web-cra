import { Box, Container, Heading } from "theme-ui";

import { FriendsList } from "../components/FriendsList";

export const Friends = () => {
  return (
    <Container sx={{ maxWidth: 900, pt: 20 }}>
      <Heading as="h1" mb={4}>
        Friends
      </Heading>

      <Box>
        <FriendsList />
      </Box>
    </Container>
  );
};
