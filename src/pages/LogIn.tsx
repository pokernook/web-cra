/** @jsxImportSource theme-ui */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Alert, Box, Button, Card, Field, Heading, Text } from "theme-ui";

import { FadeIn } from "../components/Animated";
import { MutationUserLogInArgs, useLogInMutation } from "../graphql";

export const LogIn = () => {
  const [logInResult, logIn] = useLogInMutation();
  const { register, handleSubmit } = useForm<MutationUserLogInArgs>();

  const onSubmit = handleSubmit((data) => logIn(data));

  return (
    <>
      <Heading mb={3}>Enter the &apos;Nook</Heading>

      {logInResult.error && (
        <FadeIn>
          <Alert variant="error" mb={3}>
            {logInResult.error.networkError?.message ||
              logInResult.error.graphQLErrors[0]?.message}
          </Alert>
        </FadeIn>
      )}

      <Card>
        <Box as="form" onSubmit={onSubmit}>
          <Field
            label="Email"
            name="email"
            type="email"
            ref={register({ required: true })}
            mb={2}
          />

          <Field
            label="Password"
            name="password"
            type="password"
            ref={register({ required: true })}
            mb={3}
          />

          <Button type="submit" variant="primary">
            Log in to PokerNook
          </Button>
        </Box>
      </Card>

      <Card mt={3}>
        <Text>
          New &apos;round these parts?{" "}
          <Link to="/signUp" sx={{ variant: "styles.a" }}>
            Sign up
          </Link>
          .
        </Text>
      </Card>
    </>
  );
};
