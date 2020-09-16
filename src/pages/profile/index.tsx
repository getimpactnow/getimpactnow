import React from "react";
import Flex from "@chakra-ui/core/dist/Flex";

import { ImpactSelector } from "../../modules/impact-range";
import { TextBrand } from "../../components/atoms/brand";

export const Profile: React.FC = () => {
  return (
    <Flex
      position="relative"
      direction="column"
      alignItems="center"
      width="100%"
    >
      <TextBrand zIndex={3} />
      <ImpactSelector />
    </Flex>
  );
};
