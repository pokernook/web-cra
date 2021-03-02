/** @jsxImportSource theme-ui */
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Alert, Box, Button, Card, Field, Heading, Text } from "theme-ui";

import { MutationUserSignUpArgs, useSignUpMutation } from "../graphql";

export const SignUp = () => {
  const [signUpResult, signUp] = useSignUpMutation();
  const { register, handleSubmit } = useForm<MutationUserSignUpArgs>();

  const onSubmit = handleSubmit((data) => signUp(data));

  return (
    <>
      <Heading mb={3}>Create your account</Heading>

      {signUpResult.error && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Alert variant="error" mb={3}>
            {signUpResult.error.networkError?.message ||
              signUpResult.error.graphQLErrors[0]?.message}
          </Alert>
        </motion.div>
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
