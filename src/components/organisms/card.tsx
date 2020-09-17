import { Heading, IconButton, Stack } from "@chakra-ui/core";
import React from "react";
import Box, { BoxProps } from "@chakra-ui/core/dist/Box";
import Text from "@chakra-ui/core/dist/Text";

interface CardProps {
  id: string;
  title: string;
  summary: string;
}

export const Card: React.FC<CardProps & BoxProps> = ({
  id,
  title,
  summary,
  ...boxProps
}) => {
  return (
    <Box
      border="1px solid white"
      borderRadius="0.5rem"
      padding="0.5rem"
      marginBottom="0.5rem"
      {...boxProps}
    >
      <Heading as="h2">{title}</Heading>
      <Text>{summary}</Text>
      <Stack isInline spacing="0.5rem" padding="0.5rem" backgroundColor="white">
        <IconButton icon="copy" aria-label="copy" size="xs" />
        <IconButton icon="edit" aria-label="edit" size="xs" />
        <IconButton icon="info" aria-label="info" size="xs" />
      </Stack>
    </Box>
  );
};
