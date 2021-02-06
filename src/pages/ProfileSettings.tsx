import { useForm } from "react-hook-form";
import { Avatar, Box, Button, Divider, Field, Heading } from "theme-ui";

import {
  UpdateUsernameMutationVariables,
  useMeQuery,
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

export const ProfileSettings = () => (
  <>
    <UpdateUsernameForm />
    <UpdateProfilePictureForm />
  </>
);
