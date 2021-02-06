import { useForm } from "react-hook-form";
import { Box, Button, Divider, Field, Heading, Text } from "theme-ui";

import {
  UpdatePasswordMutationVariables,
  useDeleteAccountMutation,
  useMeQuery,
  useUpdatePasswordMutation,
} from "../graphql";

const UpdatePasswordForm = () => {
  const [, updatePassword] = useUpdatePasswordMutation();
  const { errors, getValues, handleSubmit, register, reset } = useForm<
    UpdatePasswordMutationVariables & { confirmPassword: string }
  >();

  const onSubmit = handleSubmit(async (data) => {
    const result = await updatePassword(data);
    if (!result.error) {
      reset();
    }
  });

  return (
    <>
      <Heading as="h1">Password</Heading>
      <Divider my={3} />
      <Box as="form" onSubmit={onSubmit}>
        <Field
          label="Old password"
          name="oldPassword"
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

        <Field
          label="Confirm new password"
          name="confirmPassword"
          type="password"
          ref={register({
            required: true,
            validate: {
              passwordMatch: (value) =>
                value === getValues().newPassword ||
                "Password confirmation doesn't match the password",
            },
          })}
        />
        <Box mb={3} mt={1}>
          <Text variant="error">{errors.confirmPassword?.message}</Text>
        </Box>

        <Button variant="secondary" type="submit" mb={4}>
          Update password
        </Button>
      </Box>
    </>
  );
};

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
      <Box mb={3}>
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
    <UpdatePasswordForm />
    <DeleteAccountForm />
  </>
);
