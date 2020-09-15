import React from "react";
import Flex from "@chakra-ui/core/dist/Flex";
import Text from "@chakra-ui/core/dist/Text";
import HeaderNav from "../../components/organisms/Header";

export const Profile: React.FC = () => {
  return (
    <Flex height="100vh" width="100vw">
      <HeaderNav />
      <Text>Profile</Text>
    </Flex>
  );
};
