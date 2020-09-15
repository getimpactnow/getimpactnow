import React from "react";
import { Fab } from "../../components/atoms/fab";
import Icon from "@chakra-ui/core/dist/Icon";
import useDisclosure from "@chakra-ui/core/dist/useDisclosure";
import { AddIssueModal } from "./add-issue-modal";

interface AddIssueFabProps {
  onUpdate: () => void;
}

export const AddIssueFab: React.FC<AddIssueFabProps> = ({ onUpdate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Fab position="absolute" bottom="3rem" right="3rem" onClick={onOpen}>
        <Icon name="add" />
      </Fab>
      <AddIssueModal isOpen={isOpen} onClose={onClose} onUpdate={onUpdate} />
    </>
  );
};
