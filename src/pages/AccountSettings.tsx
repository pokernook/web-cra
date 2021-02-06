import { Box, Button, Divider, Heading, Text } from "theme-ui";

import { useDeleteAccountMutation, useMeQuery } from "../graphql";

const DeleteAccountForm = () => {
  const [, reexecuteMeQuery] = useMeQuery();
  const [, deleteAccount] = useDeleteAccountMutation();

  const handleDeleteAccount = async () => {
    await deleteAccount();
    reexecuteMeQuery({ requestPolicy: "network-only" });
  };

  return (
    <>
      <Heading as="h1" color="error">
        Delete account
      </Heading>
      <Divider my={3} />
      <Box mb={2}>
        <Text>Be careful, there's no coming back.</Text>
      </Box>
      <Button variant="danger" onClick={handleDeleteAccount}>
        Delete account
      </Button>
    </>
  );
};

export const AccountSettings = () => (
  <>
    <DeleteAccountForm />
  </>
);
