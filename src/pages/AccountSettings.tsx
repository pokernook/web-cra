import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Box, Button, Divider, Field, Heading, Text } from "theme-ui";

import {
  MutationUserUpdatePasswordArgs,
  useDeleteAccountMutation,
  useMeQuery,
  useUpdatePasswordMutation,
} from "../graphql";

const MotionText = motion.custom(Text);

const UpdatePasswordForm = () => {
  const {
    handleSubmit,
    register,
    reset,
  } = useForm<MutationUserUpdatePasswordArgs>();
  const [result, updatePassword] = useUpdatePasswordMutation();

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

        <Button variant="secondary" type="submit" mb={4} mr={2}>
          Update password
        </Button>

        {result.data && (
          <MotionText
            variant="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Updated
          </MotionText>
        )}
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
