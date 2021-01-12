import Link from "next/link";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Card,
  Container,
  Input,
  Label,
  Link as ThemeLink,
  Text,
} from "theme-ui";

import { createUrqlClient, useSignUpMutation } from "../../urql";

type FormData = {
  username: string;
  email: string;
  password: string;
};

const SignUp = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register, handleSubmit } = useForm<FormData>();
  const [, signUpUser] = useSignUpMutation();
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const result = await signUpUser(data);
    if (!result.error) {
      await router.push("/");
    }
  };

  return (
    <Container sx={{ maxWidth: 375, pt: 20, textAlign: "center" }}>
      <Card>
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
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
          <Link href="/logIn" passHref>
            <ThemeLink>Log in</ThemeLink>
          </Link>
          .
        </Text>
      </Card>
    </Container>
  );
};

export default withUrqlClient(createUrqlClient)(SignUp);
