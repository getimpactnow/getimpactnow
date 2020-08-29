import React from "react";
import Box, { BoxProps } from "@chakra-ui/core/dist/Box";
import Icon from "@chakra-ui/core/dist/Icon";
import Flex from "@chakra-ui/core/dist/Flex";
import IconButton from "@chakra-ui/core/dist/IconButton";
import { Stack } from "@chakra-ui/core";

export const Card: React.FC<BoxProps> = ({
  children,
  backgroundColor,
  ...boxProps
}) => {
  return (
    <Box
      display="flex"
      flexDir="column"
      borderRadius="0.25rem"
      height="12rem"
      overflow="hidden"
      {...boxProps}
    >
      <Box
        flex="1"
        backgroundColor={backgroundColor}
        color="white"
        padding="1rem"
        textAlign="end"
        fontWeight="bold"
      >
        {children}
      </Box>
      <Stack isInline spacing="0.5rem" padding="0.5rem" backgroundColor="white">
        <IconButton icon="copy" aria-label="copy" size="xs" />
        <IconButton icon="edit" aria-label="edit" size="xs" />
        <IconButton icon="info" aria-label="info" size="xs" />
      </Stack>
    </Box>
  );
};
