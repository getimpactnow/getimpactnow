import React from "react";
import Box, { BoxProps } from "@chakra-ui/core/dist/Box";
import { Link } from "react-router-dom";
import { AnimatedCircle } from "../../components/atoms/circle-animated";
import { MotionProps, useMotionValue } from "framer-motion";
import styled from "@emotion/styled";

const LinkStyled = styled(Link)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Zone: React.FC<
  BoxProps & MotionProps & { isSelected: boolean; id: string; size: number }
> = ({ isSelected, id, size, ...animatedCircleProps }) => {
  const zIndex = useMotionValue(isSelected ? 2 : 0);
  console.log(">> ", { zIndex, size, isSelected });
  return (
    <Box position="absolute" display="flex">
      <AnimatedCircle
        isSelected={isSelected}
        width={isSelected ? "100vw" : size}
        height={isSelected ? "100vh" : size}
        {...animatedCircleProps}
        borderRadius={isSelected ? "0" : "50%"}
      />
      {!isSelected && <LinkStyled to={`/profile/${id}`} />}
    </Box>
  );
};
