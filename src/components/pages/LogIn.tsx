/** @jsxImportSource theme-ui */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Card,
  Container,
  Heading,
  Input,
  Label,
  Text,
} from "theme-ui";

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
    <Container sx={{ maxWidth: 325, pt: 20, textAlign: "center" }}>
      <Heading mb={3}>Enter the &apos;Nook</Heading>
      {authError && (
        <Alert variant="error" mb={3}>
          {authError.networkError?.message ||
            authError.graphQLErrors[0]?.message}
        </Alert>
      )}
      <Card>
        <Box as="form" onSubmit={handleSubmit(logIn)}>
          <Label htmlFor="email" mb={2}>
            Email
          </Label>
          <Input
            id="email"
            name="email"
            ref={register({ required: true })}
            type="email"
            mb={2}
          />

          <Label htmlFor="password" mb={2}>
            Password
          </Label>
          <Input
            id="password"
            name="password"
            ref={register({ required: true })}
            type="password"
            mb={3}
          />

          <Button type="submit" variant="primary">
            Log in to PokerNook
          </Button>
        </Box>
      </Card>

      <Card sx={{ mt: 3, bg: "muted" }}>
        <Text>
          New &apos;round these parts?{" "}
          <Link to="/signUp" sx={{ variant: "styles.a" }}>
            Sign up
          </Link>
          .
        </Text>
      </Card>
    </Container>
  );
};
