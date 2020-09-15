import React from "react";
import Flex from "@chakra-ui/core/dist/Flex";
import Stack from "@chakra-ui/core/dist/Stack";
import Text from "@chakra-ui/core/dist/Text";

export const TopBar: React.FC = () => {
  return (
    <Stack
      isInline
      spacing="0.5rem"
      paddingX="1rem"
      paddingY="0.5rem"
      height="2rem"
      backgroundColor="blackAlpha.700"
      color="white"
    >
      <Text fontWeight="bold">Policy Fields:</Text>
      <Text>Overview</Text>
      <Text>Social</Text>
      <Text>Health</Text>
      <Text>Finance</Text>
      <Text>Infrastructure</Text>
      <Text>Security</Text>
      <Text>Data</Text>
      <Text>Military</Text>
      <Text>Justice</Text>
    </Stack>
  );
};
