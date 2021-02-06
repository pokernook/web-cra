/** @jsxImportSource theme-ui */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Alert, Box, Button, Card, Field, Heading, Text } from "theme-ui";

import { SignUpMutationVariables, useSignUpMutation } from "../graphql/types";
import { useUserStore } from "../stores/user";

export const SignUp = () => {
  const [signUpResult, signUp] = useSignUpMutation();
  const { register, handleSubmit } = useForm<SignUpMutationVariables>();
  const setUser = useUserStore((state) => state.setUser);

  const onSubmit = handleSubmit(async (data) => {
    const result = await signUp(data);
    setUser(result.data?.userSignUp?.user);
  });

  return (
    <>
      <Heading mb={3}>Create your account</Heading>
      {signUpResult.error && (
        <Alert variant="error" mb={3}>
          {signUpResult.error.networkError?.message ||
            signUpResult.error.graphQLErrors[0]?.message}
        </Alert>
      )}
      <Card>
        <Box as="form" onSubmit={onSubmit}>
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

      <Card sx={{ mt: 3 }}>
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
