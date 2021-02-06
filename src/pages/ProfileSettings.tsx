/** @jsxImportSource theme-ui */
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Avatar, Box, Button, Divider, Field, Heading } from "theme-ui";

import {
  UpdateUsernameMutationVariables,
  useMeQuery,
  useUpdateUsernameMutation,
} from "../graphql/types";
import { generateAvatarSvg } from "../util/generate-avatar";

type UpdateUsernameFormProps = {
  username?: string;
};

const UpdateUsernameForm: FC<UpdateUsernameFormProps> = ({ username }) => {
  const { register, handleSubmit } = useForm<UpdateUsernameMutationVariables>();
  const [, updateUsername] = useUpdateUsernameMutation();

  const onSubmit = handleSubmit((data) => updateUsername(data));

  return (
    <>
      <Heading as="h1">Username</Heading>
      <Divider sx={{ my: 3 }} />
      <Box as="form" onSubmit={onSubmit}>
        <Field
          defaultValue={username}
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

type UpdateProfilePictureFormProps = {
  id?: string;
};

const UpdateProfilePictureForm: FC<UpdateProfilePictureFormProps> = ({
  id,
}) => {
  return (
    <>
      <Heading as="h1">Profile picture</Heading>
      <Divider sx={{ my: 3 }} />
      <Box sx={{ position: "relative" }}>
        <Avatar
          src={generateAvatarSvg(`${id}`)}
          sx={{ width: 200, height: 200 }}
        />
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

export const ProfileSettings = () => {
  const [meQuery] = useMeQuery();

  const { data } = meQuery;

  return (
    <>
      <UpdateUsernameForm username={data?.me?.username} />
      <UpdateProfilePictureForm id={data?.me?.id} />
    </>
  );
};
