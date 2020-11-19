import { Button, Card, Container, Input, Label } from "theme-ui";

const Home = (): JSX.Element => {
  return (
    <>
      <Container sx={{ maxWidth: 375, pt: 20 }}>
        <Card sx={{ textAlign: "center" }}>
          <Label htmlFor="username" mb={1}>
            Username
          </Label>
          <Input id="username" name="username" type="text" mb={2} />

          <Label htmlFor="email" mb={1}>
            Email
          </Label>
          <Input id="email" name="email" type="email" mb={2} />

          <Label htmlFor="password" mb={1}>
            Password
          </Label>
          <Input id="password" name="password" type="password" mb={3} />

          <Button variant="primary">Register for PokerNook</Button>
        </Card>
      </Container>
    </>
  );
};

export default Home;
