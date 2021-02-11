/** @jsxImportSource theme-ui */
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Avatar, Box, Button, Divider, Field, Heading, Text } from "theme-ui";

import {
  MutationUserSetStatusArgs,
  MutationUserUpdateUsernameArgs,
  useMeQuery,
  useSetStatusMutation,
  useUpdateUsernameMutation,
} from "../graphql";
import { generateAvatarSvg } from "../util/generate-avatar";

const UpdateUsernameForm = () => {
  const [meQuery] = useMeQuery();
  const { register, handleSubmit } = useForm<MutationUserUpdateUsernameArgs>();
  const [result, updateUsername] = useUpdateUsernameMutation();

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
          Save username
        </Button>

        {result.data && !result.error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            sx={{ display: "inline-block" }}
          >
            <Text variant="success">Saved</Text>
          </motion.div>
        )}
      </Box>
    </>
  );
};

const UpdateStatusForm = () => {
  const [meQuery] = useMeQuery();
  const [result, setStatus] = useSetStatusMutation();
  const { register, handleSubmit } = useForm<MutationUserSetStatusArgs>();

  const { data } = meQuery;
  const onSubmit = handleSubmit((data) => setStatus(data));

  return (
    <>
      <Heading as="h1">Status</Heading>
      <Divider my={3} />
      <Box as="form" onSubmit={onSubmit}>
        <Field
          defaultValue={data?.me?.status?.message || ""}
          label="Status"
          name="message"
          type="text"
          spellCheck={false}
          ref={register()}
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
          Set status
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
    <UpdateStatusForm />
    <UpdateProfilePictureForm />
  </>
);
