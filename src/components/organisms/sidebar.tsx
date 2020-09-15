import React from "react";
import Flex from "@chakra-ui/core/dist/Flex";
import Text from "@chakra-ui/core/dist/Text";
import { MenuHeadline } from "../atoms/menu-headline";
import Stack from "@chakra-ui/core/dist/Stack";
import { MenuItem } from "../atoms/menu-item";
import { Avatar } from "../atoms/avatar";
import { useTheme } from "@chakra-ui/core";

export const SideBar: React.FC = () => {
  const { colors } = useTheme();
  return (
    <Flex
      flexDir="column"
      height="100%"
      borderRight={`1px solid ${colors.blackAlpha[400]}`}
    >
      <Flex background="teal" p="1rem" flexDir="column">
        <Avatar />
        <Text>user@email.de</Text>
      </Flex>
      <Stack p="1rem" flex="1" background="blackAlpha.600" spacing="1rem">
        <Flex flexDir="column">
          <MenuHeadline>Information</MenuHeadline>
          <MenuItem>Upcoming</MenuItem>
          <MenuItem>Needs & Trends</MenuItem>
        </Flex>
        <Flex flexDir="column">
          <MenuHeadline>Ideas</MenuHeadline>
          <MenuItem>Set the agenda</MenuItem>
          <MenuItem>Work on Solutions</MenuItem>
          <MenuItem>Share your Expertise</MenuItem>
        </Flex>
        <Flex flexDir="column">
          <MenuHeadline>Proposals</MenuHeadline>
          <MenuItem>Debate with other People</MenuItem>
          <MenuItem>Work on specific Proposals</MenuItem>
          <MenuItem>Scruitinise Options</MenuItem>
        </Flex>
        <Flex flexDir="column">
          <MenuHeadline>Decisions</MenuHeadline>
          <MenuItem>Vote</MenuItem>
          <MenuItem>Watch & Rate</MenuItem>
        </Flex>
      </Stack>
      <Flex p="1rem" flexDir="column">
        <Text>Government</Text>
        <Stack display="flex" flexDir="row" spacing="0.5rem">
          <Text>Local</Text>
          <Text>Regional</Text>
          <Text>Natianal</Text>
        </Stack>
      </Flex>
    </Flex>
  );
};
