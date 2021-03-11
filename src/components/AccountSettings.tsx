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
import { FadeIn } from "./Animated";

export const AccountSettings = () => (
  <>
    <UpdateEmail />
    <Divider my={3} />
    <UpdatePassword />
    <Divider my={3} />
    <DeleteAccount />
  </>
);

const UpdateEmail = () => {
  const [meQuery] = useMeQuery();
  const { data } = meQuery;
  const {
    handleSubmit,
    register,
    formState,
  } = useForm<MutationUserUpdateEmailArgs>({
    defaultValues: { newEmail: data?.me?.email },
  });
  const [, updateEmail] = useUpdateEmailMutation();

  const { isDirty } = formState;

  const onSubmit = handleSubmit((data) => updateEmail(data));

  return (
    <form onSubmit={onSubmit}>
      <Heading as="h3" mb={3}>
        Email
      </Heading>

      <Field
        label="Email address"
        name="newEmail"
        type="email"
        ref={register({ required: true })}
      />

      <Box mt={1} mb={3} ml={1}>
        {!data?.me?.emailVerified && (
          <Text variant="help">
            Not verified; check your inbox, or{" "}
            <Link>resend the verification email</Link>.
          </Text>
        )}
      </Box>

      {isDirty && (
        <FadeIn>
          <Field
            label="Password"
            name="password"
            type="password"
            ref={register({ required: true })}
            mb={3}
          />

          <Button variant="tertiary" type="submit">
            Save email
          </Button>
        </FadeIn>
      )}
    </form>
  );
};

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
