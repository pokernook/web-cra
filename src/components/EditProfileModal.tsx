import {
  Box,
  Button,
  Card,
  Close,
  Field,
  Flex,
  Heading,
} from "@theme-ui/components";
import { FC } from "react";

import { useMeQuery } from "../graphql";
import { ModalPortal } from "./Modal";

type Props = {
  onClose: () => void;
};

export const EditProfileModal: FC<Props> = ({ onClose }) => {
  const [meQuery] = useMeQuery();

  const { data } = meQuery;

  return (
    <ModalPortal onClose={onClose} hasDimmedBackground>
      <Card variant="modal">
        <Close
          onClick={onClose}
          sx={{ position: "absolute", top: 10, right: 10 }}
        />
        <Heading>Edit your profile</Heading>

        <Box mt={3}>
          <Field
            label="Username"
            type="text"
            spellCheck={false}
            name="username"
            defaultValue={data?.me?.username}
            mb={3}
          />

          <Flex sx={{ float: "right" }}>
            <Button variant="tertiary" type="button" mr={2} onClick={onClose}>
              Cancel
            </Button>

            <Button variant="secondary">Save changes</Button>
          </Flex>
        </Box>
      </Card>
    </ModalPortal>
  );
};
