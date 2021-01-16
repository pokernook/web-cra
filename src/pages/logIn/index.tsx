/** @jsxImportSource theme-ui */
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { Box, Button, Card, Container, Input, Label, Text } from "theme-ui";

import { useLogInMutation } from "../../graphql";

interface FormData {
  email: string;
  password: string;
}

export const LogIn: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [, logInUser] = useLogInMutation();
  const history = useHistory();

  const logIn = async (data: FormData) => {
    const result = await logInUser(data);
    if (!result.error) {
      history.push("/");
    }
  };

  return (
    <Container sx={{ maxWidth: 375, pt: 20, textAlign: "center" }}>
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
