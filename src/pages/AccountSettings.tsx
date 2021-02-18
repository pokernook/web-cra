/** @jsxImportSource theme-ui */
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Box, Button, Divider, Field, Heading, Link, Text } from "theme-ui";

import {
  MutationUserUpdateEmailArgs,
  MutationUserUpdatePasswordArgs,
  useDeleteAccountMutation,
  useMeQuery,
  useUpdateEmailMutation,
  useUpdatePasswordMutation,
} from "../graphql";

const EmailVerificationForm = () => {
  const [meQuery] = useMeQuery();
  const [result, updateEmail] = useUpdateEmailMutation();
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<MutationUserUpdateEmailArgs>();

  const { data } = meQuery;
  const onSubmit = handleSubmit(async (data) => {
    const result = await updateEmail(data);
    if (!result.error) {
      reset();
    }
  });

  return (
    <>
      <Heading as="h2">Email</Heading>
      <Divider mt={2} mb={3} />

      <Heading as="h3">{data?.me?.email}</Heading>
      <Box mt={2} mb={3}>
        {!data?.me?.emailVerified && (
          <Text>
            Looks like your email isn't verified; check your inbox, or{" "}
            <Link>resend the verification email</Link>.
          </Text>
        )}
      </Box>

      <Box as="form" onSubmit={onSubmit}>
        <Field
          label="New email"
          name="newEmail"
          type="email"
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
          Update email
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
      <Heading as="h2">Password</Heading>
      <Divider mt={2} mb={3} />
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
  const [, deleteAccount] = useDeleteAccountMutation();

  const handleDeleteAccount = async () => await deleteAccount();

  return (
    <>
      <Heading as="h2" color="error">
        Delete account
      </Heading>
      <Divider mt={2} mb={3} />
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
