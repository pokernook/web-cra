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

import { createUrqlClient, useLogInMutation } from "../../urql";

type FormData = {
  email: string;
  password: string;
};

const LogIn = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register, handleSubmit } = useForm<FormData>();
  const [, logInUser] = useLogInMutation();
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    const result = await logInUser(data);
    if (!result.error) {
      await router.push("/");
    }
  };

  return (
    <Container sx={{ maxWidth: 375, pt: 20, textAlign: "center" }}>
      <Card>
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
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
          <Link href="/signUp" passHref={true}>
            <ThemeLink>Sign up</ThemeLink>
          </Link>
          .
        </Text>
      </Card>
    </Container>
  );
};

export default withUrqlClient(createUrqlClient)(LogIn);
