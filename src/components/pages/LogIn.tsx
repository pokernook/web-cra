/** @jsxImportSource theme-ui */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Alert, Box, Button, Card, Field, Heading, Text } from "theme-ui";

import { LogInMutationVariables } from "../../graphql/types";
import { useUserStore } from "../../stores/user";

type FormData = LogInMutationVariables;

export const LogIn = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [logIn, authError, clearAuthError] = useUserStore((state) => [
    state.logIn,
    state.authError,
    state.clearAuthError,
  ]);

  useEffect(() => {
    return () => clearAuthError();
  }, [clearAuthError]);

  return (
    <>
      <Heading mb={3}>Enter the &apos;Nook</Heading>
      {authError && (
        <Alert variant="error" mb={3}>
          {authError.networkError?.message ||
            authError.graphQLErrors[0]?.message}
        </Alert>
      )}
      <Card>
        <Box as="form" onSubmit={handleSubmit(logIn)}>
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

      <Card sx={{ mt: 3 }}>
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
