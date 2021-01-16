/** @jsxImportSource theme-ui */
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { Box, Button, Card, Container, Input, Label, Text } from "theme-ui";

import { useSignUpMutation } from "../../graphql";

interface FormData {
  username: string;
  email: string;
  password: string;
}

export const SignUp: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [, signUpUser] = useSignUpMutation();
  const history = useHistory();

  const signUp = async (data: FormData) => {
    const result = await signUpUser(data);
    if (!result.error) {
      history.push("/");
    }
  };

  return (
    <Container sx={{ maxWidth: 375, pt: 20, textAlign: "center" }}>
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
