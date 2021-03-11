import { ChangeEvent, FC, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Avatar, Box, Button, Field, Grid, Input, Label } from "theme-ui";

import { useMeQuery, useUpdateUsernameMutation } from "../graphql";
import { useGeneratedAvatar } from "../hooks";
import { CropperModal } from "./CropperModal";
import {
  ModalCard,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalPortal,
} from "./Modal";

type Props = {
  onClose: () => void;
};

type FormData = {
  username: string;
};

export const EditProfileModal: FC<Props> = ({ onClose }) => {
  const [meQuery] = useMeQuery();
  const [, updateUsername] = useUpdateUsernameMutation();
  const { register, handleSubmit } = useForm<FormData>();
  const imageInput = useRef<HTMLInputElement>(null);
  const [rawImageUrl, setRawImageUrl] = useState<string>();
  const [croppedImageUrl, setCroppedImageUrl] = useState<string>();
  const [cropperOpen, setCropperOpen] = useState(false);

  const { data } = meQuery;

  const generatedAvatar = useGeneratedAvatar(data?.me?.id || "");

  const openImageUpload = () => imageInput.current?.click();

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setRawImageUrl(URL.createObjectURL(file));
      setCropperOpen(true);
    }
    e.target.value = "";
  };

  const handleProfileUpdate = handleSubmit(async (data) => {
    const result = await updateUsername({ newUsername: data.username });
    if (!result.error) {
      onClose();
    }
  });

  return (
    <ModalPortal onClose={onClose} hasDimmedBackground>
      <ModalCard>
        <ModalClose onClose={onClose} />
        <ModalHeader>Edit your profile</ModalHeader>

        <ModalContent>
          <Box
            as="form"
            id="profile-form"
            onSubmit={handleProfileUpdate}
            sx={{ px: 3 }}
          >
            <Grid gap={3} columns={[2, "2fr 1fr"]}>
              <Box>
                <Field
                  label="Username"
                  type="text"
                  spellCheck={false}
                  name="username"
                  defaultValue={data?.me?.username}
                  ref={register()}
                />
              </Box>

              <Box>
                <Label>Profile photo</Label>
                <div>
                  <Avatar
                    src={croppedImageUrl || generatedAvatar}
                    sx={{ height: 160, width: 160 }}
                  />
                  <Input
                    type="file"
                    accept="image/*"
                    ref={imageInput}
                    sx={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                </div>
                <Button
                  type="button"
                  sx={{ width: "100%", mt: 1 }}
                  variant="tertiary"
                  onClick={openImageUpload}
                >
                  Upload an image
                </Button>
              </Box>
            </Grid>
          </Box>
        </ModalContent>

        <ModalFooter>
          <Button variant="tertiary" mr={2} onClick={onClose}>
            Cancel
          </Button>

          <Button variant="secondary" type="submit" form="profile-form">
            Save changes
          </Button>
        </ModalFooter>
      </ModalCard>

      {cropperOpen && rawImageUrl && (
        <CropperModal
          imageUrl={rawImageUrl}
          onClose={() => setCropperOpen(false)}
          onSave={setCroppedImageUrl}
        />
      )}
    </ModalPortal>
  );
};
