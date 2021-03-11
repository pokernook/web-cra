import { useForm } from "react-hook-form";
import { Box, Button, Divider, Field, Heading, Text } from "theme-ui";

import {
  MutationUserUpdatePasswordArgs,
  useDeleteAccountMutation,
  useUpdatePasswordMutation,
} from "../graphql";

export const AccountSettings = () => (
  <>
    <UpdatePassword />
    <Divider my={3} />
    <DeleteAccount />
  </>
);

const UpdatePassword = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<MutationUserUpdatePasswordArgs>();
  const [, updatePassword] = useUpdatePasswordMutation();

  const onSubmit = handleSubmit(async (data) => {
    const result = await updatePassword(data);
    if (!result.error) {
      reset();
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Heading as="h3" mb={3}>
        Update password
      </Heading>

      <Field
        label="Current password"
        name="currentPassword"
        type="password"
        ref={register({ required: true })}
        mb={3}
      />

      <Field
        label="New password"
        name="newPassword"
        type="password"
        ref={register({ required: true })}
        mb={3}
      />

      <Button variant="tertiary" type="submit">
        Update password
      </Button>
    </form>
  );
};

const DeleteAccount = () => {
  const [, deleteAccount] = useDeleteAccountMutation();

  const handleDeleteAccount = () => deleteAccount();

  return (
    <>
      <Heading as="h3" mb={3}>
        Delete account
      </Heading>
      <Box mb={3}>
        <Text>Careful, there&apos;s no coming back.</Text>
      </Box>

      <Button variant="danger" onClick={handleDeleteAccount}>
        Delete account
      </Button>
    </>
  );
};
