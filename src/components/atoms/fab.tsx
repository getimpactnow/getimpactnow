import React from "react";
import { Button, ButtonProps, Icon } from "@chakra-ui/core";

export const Fab: React.FC<ButtonProps> = ({ children, ...buttonProps }) => {
  return (
    <Button
      width="3.5rem"
      height="3.5rem"
      borderRadius="50%"
      boxShadow="0px 0px 5px 0px rgba(1,1,1,0.25)"
      backgroundColor="teal.600"
      color="white"
      {...buttonProps}
    >
      {children}
    </Button>
  );
};
