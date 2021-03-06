import { Box, Button, Field, Grid, Input, Label } from "@theme-ui/components";
import { ChangeEvent, FC, useRef, useState } from "react";

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
  const inputPhoto = useRef<HTMLInputElement>(null);
  const [photoUpload, setPhotoUpload] = useState<File | undefined>(undefined);

  const { data } = meQuery;

  const openPhotoUpload = () => inputPhoto.current?.click();

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setPhotoUpload(e.target.files?.[0]);
  };

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
                  <Input
                    type="file"
                    ref={inputPhoto}
                    sx={{ display: "none" }}
                    onChange={handlePhotoUpload}
                  />
                </div>
                <Button
                  type="button"
                  sx={{ width: "100%", mt: 1 }}
                  variant="tertiary"
                  onClick={openPhotoUpload}
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
