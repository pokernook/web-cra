/** @jsxImportSource theme-ui */
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Box, Button, Divider, Field, Heading, Text } from "theme-ui";

import {
  MutationUserUpdatePasswordArgs,
  useDeleteAccountMutation,
  useMeQuery,
  useUpdatePasswordMutation,
} from "../graphql";

const EmailVerificationForm = () => {
  const [meQuery] = useMeQuery();
  const { register, handleSubmit } = useForm();

  const { data } = meQuery;
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <Heading as="h1">Email</Heading>
      <Divider my={3} />
      <Heading as="h3" mb={3}>
        {data?.me?.email}
      </Heading>

      <Box as="form" onSubmit={onSubmit}>
        <Field
          label="Email"
          name="email"
          type="email"
          ref={register({ required: true })}
        />
        <Button variant="secondary" type="submit" mb={4} mr={2}>
          Update email
        </Button>
      </Box>
    </>
  );
};

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
        />

        <Box mt={1} mb={3}>
          {result.error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Text variant="danger">
                {result.error.graphQLErrors[0]?.message ||
                  result.error.networkError?.message}
              </Text>
            </motion.div>
          )}
        </Box>

        <Button variant="secondary" type="submit" mb={4} mr={2}>
          Update password
        </Button>

        {result.data && !result.error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            sx={{ display: "inline-block" }}
          >
            <Text variant="success">Updated</Text>
          </motion.div>
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
    <EmailVerificationForm />
    <UpdatePasswordForm />
    <DeleteAccountForm />
  </>
);
