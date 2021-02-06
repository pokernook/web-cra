/** @jsxImportSource theme-ui */
import { useForm } from "react-hook-form";
import { Avatar, Box, Button, Divider, Field, Heading, Text } from "theme-ui";

import {
  UpdatePasswordMutationVariables,
  UpdateUsernameMutationVariables,
  useMeQuery,
  useUpdatePasswordMutation,
  useUpdateUsernameMutation,
} from "../graphql";
import { generateAvatarSvg } from "../util/generate-avatar";

const UpdateUsernameForm = () => {
  const [meQuery] = useMeQuery();
  const { register, handleSubmit } = useForm<UpdateUsernameMutationVariables>();
  const [, updateUsername] = useUpdateUsernameMutation();

  const { data } = meQuery;
  const onSubmit = handleSubmit((data) => updateUsername(data));

  return (
    <>
      <Heading as="h1">Username</Heading>
      <Divider my={3} />
      <Box as="form" onSubmit={onSubmit}>
        <Field
          defaultValue={data?.me?.username}
          label="Username"
          name="newUsername"
          type="text"
          ref={register({ required: true })}
          spellCheck={false}
          mb={3}
        />
        <Button variant="secondary" type="submit" mb={4}>
          Save username
        </Button>
      </Box>
    </>
  );
};

const UpdateProfilePictureForm = () => {
  const [meQuery] = useMeQuery();

  const { data } = meQuery;

  return (
    <>
      <Heading as="h1">Profile picture</Heading>
      <Divider my={3} />
      <Box sx={{ position: "relative", mb: 4 }}>
        <Avatar
          src={generateAvatarSvg(`${data?.me?.id}`)}
          sx={{ width: 200, height: 200 }}
        />
        <Button
          variant="secondary"
          sx={{ position: "absolute", bottom: 0, left: 0 }}
        >
          Change picture
        </Button>
      </Box>
    </>
  );
};

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

export const ProfileSettings = () => (
  <>
    <UpdateUsernameForm />
    <UpdateProfilePictureForm />
    <UpdatePasswordForm />
  </>
);
