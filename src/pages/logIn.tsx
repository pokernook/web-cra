import { withUrqlClient } from "next-urql";
import { useForm } from "react-hook-form";
import { Box, Button, Card, Container, Input, Label } from "theme-ui";
import { useMutation } from "urql";

import { createUrqlClient } from "../urql/client";

const LogInUser = /* GraphQL */ `
  mutation($email: String!, $password: String!) {
    logIn(email: $email, password: $password) {
      token
      user {
        username
        discriminator
      }
    }
  }
`;

type FormData = {
  email: string;
  password: string;
};

const LogIn = (): JSX.Element => {
  const { register, handleSubmit } = useForm<FormData>();

  const [, logInUser] = useMutation(LogInUser);

  const onSubmit = async (data: FormData) => {
    const result = await logInUser(data);
    console.log(result);
  };

  return (
    <Container sx={{ maxWidth: 375, pt: 20 }}>
      <Card sx={{ textAlign: "center" }}>
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="email" mb={1}>
            Email
          </Label>
          <Input
            id="email"
            name="email"
            ref={register({ required: true })}
            type="email"
            mb={2}
          />

          <Label htmlFor="password" mb={1}>
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
    </Container>
  );
};

export default withUrqlClient(createUrqlClient)(LogIn);
