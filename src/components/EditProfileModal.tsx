import { Box, Button, Field, Grid, Label } from "@theme-ui/components";
import { FC } from "react";

import { useMeQuery } from "../graphql";
import {
  ModalCard,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalPortal,
} from "./Modal";
import { UserAvatar } from "./UserAvatar";

type Props = {
  onClose: () => void;
};

export const EditProfileModal: FC<Props> = ({ onClose }) => {
  const [meQuery] = useMeQuery();

  const { data } = meQuery;

  return (
    <ModalPortal onClose={onClose} hasDimmedBackground>
      <ModalCard>
        <ModalClose onClose={onClose} />
        <ModalHeader>Edit your profile</ModalHeader>

        <ModalContent>
          <form id="profile-form" onSubmit={() => {}}>
            <Grid gap={3} columns={[2, "2fr 1fr"]}>
              <Box>
                <Field
                  label="Username"
                  type="text"
                  spellCheck={false}
                  name="username"
                  defaultValue={data?.me?.username}
                />
              </Box>

              <Box>
                <Label>Profile photo</Label>
                <div>
                  <UserAvatar user={data?.me} size={160} />
                </div>
                <Button
                  type="button"
                  sx={{ width: "100%", mt: 1 }}
                  variant="tertiary"
                >
                  Upload an image
                </Button>
              </Box>
            </Grid>
          </form>
        </ModalContent>

        <ModalFooter>
          <Button variant="tertiary" mr={2} onClick={onClose}>
            Cancel
          </Button>

          <Button variant="secondary">Save changes</Button>
        </ModalFooter>
      </ModalCard>
    </ModalPortal>
  );
};
