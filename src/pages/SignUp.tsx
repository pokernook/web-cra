/** @jsxImportSource theme-ui */
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Card,
  Container,
  Input,
  Label,
  Text,
} from "theme-ui";

import { SignUpMutationVariables } from "../graphql";
import { useUserStore } from "../stores/user";

type FormData = SignUpMutationVariables;

export const SignUp: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [signUp, authError, clearAuthError] = useUserStore((state) => [
    state.signUp,
    state.authError,
    state.clearAuthError,
  ]);

  useEffect(() => clearAuthError(), [clearAuthError]);

  return (
    <Container sx={{ maxWidth: 375, pt: 20, textAlign: "center" }}>
      {authError && (
        <Alert variant="error" mb={3}>
          {authError.graphQLErrors[0]?.message}
        </Alert>
      )}
      <Card>
        <Box as="form" onSubmit={handleSubmit(signUp)}>
          <Label htmlFor="username" mb={2}>
            Username
          </Label>
          <Input
            id="username"
            name="username"
            ref={register({ required: true })}
            spellCheck={false}
            type="text"
            mb={2}
          />

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
    </Container>
  );
};
