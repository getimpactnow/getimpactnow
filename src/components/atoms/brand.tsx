import React from "react";
import Text from "@chakra-ui/core/dist/Text";
import { BoxProps } from "@chakra-ui/core/dist/Box";

export const TextBrand: React.FC<BoxProps> = ({ ...boxProps }) => {
  return (
    <Text fontWeight="bold" margin="1rem" fontSize="1.5rem" {...boxProps}>
      get.impact.now
    </Text>
  );
};
