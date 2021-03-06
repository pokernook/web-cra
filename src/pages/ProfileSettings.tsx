import { useForm } from "react-hook-form";
import { Box, Button, Divider, Field, Heading, Text } from "theme-ui";

import { FadeIn, FadeOut } from "../components/Animated";
import { UserAvatar } from "../components/UserAvatar";
import {
  MutationUserUpdateUsernameArgs,
  useMeQuery,
  useUpdateUsernameMutation,
} from "../graphql";

const UpdateUsernameForm = () => {
  const [meQuery] = useMeQuery();
  const { register, handleSubmit } = useForm<MutationUserUpdateUsernameArgs>();
  const [result, updateUsername] = useUpdateUsernameMutation();

  const { data } = meQuery;
  const onSubmit = handleSubmit((data) => updateUsername(data));

  return (
    <>
      <Heading as="h2">Username</Heading>
      <Divider mt={2} mb={3} />
      <Box as="form" onSubmit={onSubmit}>
        <Field
          defaultValue={data?.me?.username}
          label="New username"
          name="newUsername"
          type="text"
          ref={register({ required: true })}
          spellCheck={false}
        />

        <Box mt={1} mb={3}>
          {result.error && (
            <FadeIn>
              <Text variant="danger">
                {result.error.graphQLErrors[0]?.message ||
                  result.error.networkError?.message}
              </Text>
            </FadeIn>
          )}
        </Box>

        <Button variant="secondary" type="submit" mb={4} mr={2}>
          Save username
        </Button>

        {result.data && !result.error && (
          <FadeOut sx={{ display: "inline-block" }}>
            <Text variant="success">Saved</Text>
          </FadeOut>
        )}
      </Box>
    </>
  );
};

const UpdateProfilePictureForm = () => {
  const [meQuery] = useMeQuery();

  const { data } = meQuery;

  return (
    <>
      <Heading as="h2">Profile picture</Heading>
      <Divider mt={2} mb={3} />
      <Box sx={{ position: "relative", mb: 4 }}>
        <UserAvatar size={200} user={data?.me} />

        <Button
          variant="secondary"
          sx={{ position: "absolute", bottom: 0, left: 0, bg: "background" }}
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
