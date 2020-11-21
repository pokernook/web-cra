import { withUrqlClient } from "next-urql";
import { useForm } from "react-hook-form";
import { Box, Button, Card, Container, Input, Label } from "theme-ui";
import { useMutation } from "urql";

import { createUrqlClient } from "../urql/client";

const RegisterUser = /* GraphQL */ `
  mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      token
      user {
        username
        discriminator
      }
    }
  }
`;

type FormData = {
  username: string;
  email: string;
  password: string;
};

const Register = (): JSX.Element => {
  const { register, handleSubmit } = useForm<FormData>();

  const [, registerUser] = useMutation(RegisterUser);

  const onSubmit = async (data: FormData) => {
    const result = await registerUser(data);
    console.log(result);
  };

  return (
    <Container sx={{ maxWidth: 375, pt: 20 }}>
      <Card sx={{ textAlign: "center" }}>
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="username" mb={1}>
            Username
          </Label>
          <Input
            id="username"
            name="username"
            ref={register({ required: true })}
            type="text"
            mb={2}
          />

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
            Register for PokerNook
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default withUrqlClient(createUrqlClient)(Register);