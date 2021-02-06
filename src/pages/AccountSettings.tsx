import { Box, Button, Divider, Heading, Text } from "theme-ui";

const DeleteAccountForm = () => (
  <>
    <Heading as="h1" color="error">
      Delete account
    </Heading>
    <Divider my={3} />
    <Box mb={2}>
      <Text>Be careful, there's no coming back.</Text>
    </Box>
    <Button variant="danger">Delete account</Button>
  </>
);

export const AccountSettings = () => (
  <>
    <DeleteAccountForm />
  </>
);
