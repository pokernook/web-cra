import { Box, Button, Heading, Text } from "theme-ui";

import { useDeleteAccountMutation } from "../graphql";

export const AccountSettings = () => (
  <>
    <DeleteAccount />
  </>
);

const DeleteAccount = () => {
  const [, deleteAccount] = useDeleteAccountMutation();

  const handleDeleteAccount = () => deleteAccount();

  return (
    <>
      <Box mb={3}>
        <Heading as="h3" mb={3}>
          Delete account
        </Heading>
        <Text>Careful, there&apos;s no coming back.</Text>
      </Box>

      <Button variant="danger" onClick={handleDeleteAccount}>
        Delete account
      </Button>
    </>
  );
};
