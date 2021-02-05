import { Button, Divider, Field, Heading } from "theme-ui";

import { useUserStore } from "../stores/user";

export const ProfileSettings = () => {
  const [user] = useUserStore((state) => [state.user]);

  return (
    <>
      <Heading as="h1">Profile</Heading>
      <Divider sx={{ my: 3 }} />
      <Field
        label="Username"
        name="username"
        type="text"
        value={user?.username}
        spellCheck={false}
        mb={3}
      />
      <Button variant="primary">Save username</Button>
    </>
  );
};
