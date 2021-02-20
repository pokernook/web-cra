/** @jsxImportSource theme-ui */
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Box, Button, Divider, Field, Flex, Heading, Text } from "theme-ui";

import { FadeOutDiv } from "../components/FadeOutDiv";
import { UserAvatar } from "../components/UserAvatar";
import {
  MutationUserSetStatusArgs,
  MutationUserUpdateUsernameArgs,
  useClearStatusMutation,
  useMeQuery,
  useSetStatusMutation,
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
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
          <FadeOutDiv sx={{ display: "inline-block" }}>
            <Text variant="success">Saved</Text>
          </FadeOutDiv>
        )}
      </Box>
    </>
  );
};

const UpdateStatusForm = () => {
  const [meQuery] = useMeQuery();
  const [setStatusResult, setStatus] = useSetStatusMutation();
  const [clearStatusResult, clearStatus] = useClearStatusMutation();
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<MutationUserSetStatusArgs>();

  const { data } = meQuery;
  const onSubmit = handleSubmit((data) => setStatus(data));
  const onClearStatus = async () => {
    const result = await clearStatus();
    if (!result.error) {
      reset();
    }
  };

  return (
    <>
      <Heading as="h2">Status</Heading>
      <Divider mt={2} mb={3} />
      <Box as="form" onSubmit={onSubmit}>
        <Field
          defaultValue={data?.me?.status?.message || ""}
          label="What's happening?"
          name="message"
          type="text"
          spellCheck={false}
          ref={register()}
          required
        />

        <Box mt={1} mb={3}>
          {setStatusResult.error && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Text variant="danger">
                {setStatusResult.error.graphQLErrors[0]?.message ||
                  setStatusResult.error.networkError?.message}
              </Text>
            </motion.div>
          )}
        </Box>

        <Flex mb={4} sx={{ alignItems: "center" }}>
          <Button variant="secondary" type="submit" mr={2}>
            Save status
          </Button>

          <Button
            variant="tertiary"
            type="button"
            onClick={onClearStatus}
            mr={2}
          >
            Clear status
          </Button>

          {setStatusResult.data && !setStatusResult.error && (
            <FadeOutDiv sx={{ display: "inline-block", mr: 2 }}>
              <Text variant="success">Saved</Text>
            </FadeOutDiv>
          )}
          {clearStatusResult.data && !clearStatusResult.error && (
            <FadeOutDiv sx={{ display: "inline-block" }}>
              <Text>Cleared</Text>
            </FadeOutDiv>
          )}
        </Flex>
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
        <UserAvatar size={200} userId={data?.me?.id} />

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
