import issue from "ic:canisters/issue";
import React, { SyntheticEvent } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/core/dist/Modal";
import Button from "@chakra-ui/core/dist/Button";
import { useFormik } from "formik";
import Input from "@chakra-ui/core/dist/Input";
import { useRecoilValue } from "recoil";
import { activeZone } from "../impact-zone/state";
import { Stack } from "@chakra-ui/core";
// import { useRecoilState } from "recoil";
// import { issues } from "./state";

interface AddIssueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: () => void;
}

export const AddIssueModal: React.FC<AddIssueModalProps> = ({
  isOpen,
  onClose,
  onUpdate,
}) => {
  const zone = useRecoilValue(activeZone);
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      state: "",
    },
    onSubmit: async ({ title, description, state }) => {
      try {
        await issue.addIssue(
          title,
          description,
          state,
          zone ? zone.zone : "unknown"
        );
      } catch (e) {
        console.error(">> AddIssueModal onSubmit", e);
      }
      onUpdate();
      onClose();
    },
  });

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    formik.handleSubmit();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent color="white" marginX="0.5rem">
        <form onSubmit={handleSubmit}>
          <ModalHeader>Create Issue</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing="1rem">
              <Input
                type="input"
                name="title"
                placeholder="Title"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
              <Input
                type="input"
                name="description"
                placeholder="Description"
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              <Input
                type="input"
                name="state"
                placeholder="State"
                value={formik.values.state}
                onChange={formik.handleChange}
              />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button variantColor="orange" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              variantColor="teal"
              type="submit"
              isDisabled={formik.isSubmitting}
            >
              Save
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
