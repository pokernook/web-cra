/** @jsxImportSource theme-ui */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Alert, Box, Button, Card, Field, Heading, Text } from "theme-ui";

import { LogInMutationVariables, useLogInMutation } from "../graphql/types";
import { useUserStore } from "../stores/user";

type FormData = LogInMutationVariables;

export const LogIn = () => {
  const [logInResult, logIn] = useLogInMutation();
  const { register, handleSubmit } = useForm<FormData>();
  const setUser = useUserStore((state) => state.setUser);

  const onSubmit = handleSubmit(async (data) => {
    const result = await logIn(data);
    setUser(result.data?.userLogIn?.user);
  });

  return (
    <>
      <Heading mb={3}>Enter the &apos;Nook</Heading>
      {logInResult.error && (
        <Alert variant="error" mb={3}>
          {logInResult.error.networkError?.message ||
            logInResult.error.graphQLErrors[0]?.message}
        </Alert>
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
