import React from "react";
import Flex from "@chakra-ui/core/dist/Flex";
import Box from "@chakra-ui/core/dist/Box";

interface ZoneCardProps {
  zone: string;
}
export const ZoneCard: React.FC<ZoneCardProps> = ({ zone }) => {
  return (
    <Flex
      direction="column"
      marginTop="4rem"
      justifyItems="center"
      alignItems="center"
    >
      <Box>ZoneCard: {zone}</Box>
    </Flex>
  );
};
