import { Box, Button, Field, Grid, Input, Label } from "@theme-ui/components";
import { ChangeEvent, FC, useRef, useState } from "react";
import Cropper from "react-easy-crop";

import { useMeQuery } from "../graphql";
import { useGeneratedAvatar } from "../hooks";
import {
  ModalCard,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalPortal,
} from "./Modal";
import { UserAvatar } from "./UserAvatar";

type EditProfileModalProps = {
  onClose: () => void;
};

type PhotoUploadState = {
  file?: File;
  url?: string;
};

export const EditProfileModal: FC<EditProfileModalProps> = ({ onClose }) => {
  const [meQuery] = useMeQuery();
  const inputPhoto = useRef<HTMLInputElement>(null);
  const [photoUpload, setPhotoUpload] = useState<PhotoUploadState>();

  const { data } = meQuery;

  const generatedAvatar = useGeneratedAvatar(data?.me?.id || "");

  const openPhotoUpload = () => inputPhoto.current?.click();

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setPhotoUpload({ file, url: URL.createObjectURL(file) });
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
                  <UserAvatar src={generatedAvatar} size={160} />
                  <Input
                    type="file"
                    accept="image/*"
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

type CropPhotoModalProps = {
  photoUrl: string;
};

const CropPhotoModal: FC<CropPhotoModalProps> = ({ photoUrl }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  return (
    <ModalPortal onClose={() => {}}>
      <Cropper
        aspect={1}
        image={photoUrl}
        crop={crop}
        onCropChange={setCrop}
        zoom={zoom}
        onZoomChange={setZoom}
      />
    </ModalPortal>
  );
};
