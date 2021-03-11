import { useForm } from "react-hook-form";
import { Box, Button, Divider, Field, Heading, Link, Text } from "theme-ui";

import { FadeIn, FadeOut } from "../components/Animated";
import {
  MutationUserUpdateEmailArgs,
  useMeQuery,
  useUpdateEmailMutation,
} from "../graphql";

const EmailForm = () => {
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
            <FadeIn>
              <Text variant="danger">
                {result.error.graphQLErrors[0]?.message ||
                  result.error.networkError?.message}
              </Text>
            </FadeIn>
          )}
        </Box>

        <Button variant="secondary" type="submit" mb={4} mr={2}>
          Update email
        </Button>

        {result.data && !result.error && (
          <FadeOut sx={{ display: "inline-block" }}>
            <Text variant="success">Updated</Text>
          </FadeOut>
        )}
      </Box>
    </>
  );
};

export const AccountSettings = () => (
  <>
    <EmailForm />
  </>
);
