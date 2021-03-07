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

type ImageState = {
  file: File;
  url: string;
};

export const EditProfileModal: FC<EditProfileModalProps> = ({ onClose }) => {
  const [meQuery] = useMeQuery();
  const imageInput = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<ImageState>();
  const [cropperOpen, setCropperOpen] = useState(false);

  const { data } = meQuery;

  const generatedAvatar = useGeneratedAvatar(data?.me?.id || "");

  const openImageUpload = () => imageInput.current?.click();

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage({ file, url: URL.createObjectURL(file) });
      setCropperOpen(true);
    }
    e.target.value = "";
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
          </form>
        </ModalContent>

        <ModalFooter>
          <Button variant="tertiary" mr={2} onClick={onClose}>
            Cancel
          </Button>

          <Button variant="secondary">Save changes</Button>
        </ModalFooter>
      </ModalCard>

      {cropperOpen && image && (
        <CropImageModal
          imageUrl={image.url}
          onClose={() => setCropperOpen(false)}
        />
      )}
    </ModalPortal>
  );
};

type CropImageModalProps = {
  imageUrl: string;
  onClose: () => void;
};

const CropImageModal: FC<CropImageModalProps> = ({ imageUrl, onClose }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  return (
    <ModalPortal onClose={onClose}>
      <ModalCard>
        <ModalClose onClose={onClose} />
        <ModalHeader>Crop your photo</ModalHeader>

        <ModalContent>
          <Box sx={{ position: "relative", minHeight: 350 }}>
            <Cropper
              aspect={1}
              image={imageUrl}
              crop={crop}
              onCropChange={setCrop}
              zoom={zoom}
              onZoomChange={setZoom}
            />
          </Box>
        </ModalContent>

        <ModalFooter>
          <Button variant="tertiary" onClick={onClose} mr={2}>
            Cancel
          </Button>

          <Button variant="secondary" onClick={onClose}>
            Save
          </Button>
        </ModalFooter>
      </ModalCard>
    </ModalPortal>
  );
};
