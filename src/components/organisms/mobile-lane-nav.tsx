import Box from "@chakra-ui/core/dist/Box";
import Flex, { FlexProps } from "@chakra-ui/core/dist/Flex";
import React from "react";
import {
  FaComment,
  FaBroadcastTower,
  FaLightbulb,
  FaVoteYea,
} from "react-icons/fa";

const NavTab: React.FC<FlexProps> = ({ children, ...flexProps }) => {
  return (
    <Flex padding="1rem" {...flexProps}>
      {children}
    </Flex>
  );
};

const SIZE = 32;

export const MobileLaneNav: React.FC = () => {
  console.log(">> MobileLaneNav");
  const handleTabSelection = React.useCallback((e) => {
    console.log(">> handleTabSelection", { e });
    e.stopPropagation();
    e.preventDefault();
  }, []);
  return (
    <Flex
      direction="row"
      position="absolute"
      bottom="0"
      left="0"
      right="0"
      justifyContent="space-around"
      borderTop="1px solid white"
    >
      <NavTab onClick={handleTabSelection}>
        <FaBroadcastTower size={SIZE} />
      </NavTab>
      <NavTab onClick={handleTabSelection}>
        <FaLightbulb size={SIZE} />
      </NavTab>
      <NavTab onClick={handleTabSelection}>
        <FaComment size={SIZE} />
      </NavTab>
      <NavTab onClick={handleTabSelection}>
        <FaVoteYea size={SIZE} />
      </NavTab>
    </Flex>
  );
};
