/** @jsxImportSource theme-ui */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Alert, Box, Button, Card, Field, Heading, Text } from "theme-ui";

import { SignUpMutationVariables } from "../../graphql/types";
import { useUserStore } from "../../stores/user";

type FormData = SignUpMutationVariables;

export const SignUp = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [signUp, authError, clearAuthError] = useUserStore((state) => [
    state.signUp,
    state.authError,
    state.clearAuthError,
  ]);

  useEffect(() => {
    return () => clearAuthError();
  }, [clearAuthError]);

  return (
    <>
      <Heading mb={3}>Create your account</Heading>
      {authError && (
        <Alert variant="error" mb={3}>
          {authError.networkError?.message ||
            authError.graphQLErrors[0]?.message}
        </Alert>
      )}
      <Card>
        <Box as="form" onSubmit={handleSubmit(signUp)}>
          <Field
            label="Username"
            name="username"
            type="text"
            ref={register({ required: true })}
            spellCheck={false}
            mb={2}
          />

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
            Sign up for PokerNook
          </Button>
        </Box>
      </Card>

      <Card sx={{ mt: 3, bg: "muted" }}>
        <Text>
          Been here before?{" "}
          <Link to="/logIn" sx={{ variant: "styles.a" }}>
            Log in
          </Link>
          .
        </Text>
      </Card>
    </>
  );
};
