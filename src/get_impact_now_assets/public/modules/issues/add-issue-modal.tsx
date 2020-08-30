// @ts-ignore
import get_impact_now from "ic:canisters/get_impact_now";
import React from "react";
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
  const formik = useFormik({
    initialValues: {
      description: "",
    },
    onSubmit: async ({ description }) => {
      await get_impact_now.addIssue(description);
      onUpdate();
      onClose();
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={formik.handleSubmit}>
          <ModalHeader>Create Issue</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              type="input"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
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
