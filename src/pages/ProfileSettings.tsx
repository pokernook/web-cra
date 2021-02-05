/** @jsxImportSource theme-ui */
import { useForm } from "react-hook-form";
import { Avatar, Box, Button, Divider, Field, Heading } from "theme-ui";

import {
  UpdateUsernameMutationVariables,
  useUpdateUsernameMutation,
} from "../graphql/types";
import { useUserStore } from "../stores/user";

const UpdateUsernameForm = () => {
  const user = useUserStore((state) => state.user);
  const { register, handleSubmit } = useForm<UpdateUsernameMutationVariables>();
  const [, updateUsername] = useUpdateUsernameMutation();

  const onSubmit = handleSubmit((data) => updateUsername(data));

  return (
    <>
      <Heading as="h1">Username</Heading>
      <Divider sx={{ my: 3 }} />
      <Box as="form" onSubmit={onSubmit}>
        <Field
          defaultValue={user?.username}
          label="Username"
          name="newUsername"
          type="text"
          ref={register({ required: true })}
          spellCheck={false}
          sx={{ mb: 3 }}
        />
        <Button variant="primary" type="submit" sx={{ mb: 4 }}>
          Save username
        </Button>
      </Box>
    </>
  );
};

const UpdateProfilePictureForm = () => {
  const getAvatar = useUserStore((state) => state.getAvatar);

  return (
    <>
      <Heading as="h1">Profile picture</Heading>
      <Divider sx={{ my: 3 }} />
      <Box sx={{ position: "relative" }}>
        <Avatar src={getAvatar()} sx={{ width: 200, height: 200 }} />
        <Button
          variant="primary"
          sx={{ position: "absolute", bottom: 0, left: 0 }}
        >
          Edit picture
        </Button>
      </Box>
    </>
  );
};

export const ProfileSettings = () => (
  <>
    <UpdateUsernameForm />
    <UpdateProfilePictureForm />
  </>
);
