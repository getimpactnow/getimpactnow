import React from "react";
import Box, { BoxProps } from "@chakra-ui/core/dist/Box";
import { Link } from "react-router-dom";
import { AnimatedCircle } from "../../components/atoms/circle-animated";
import { MotionProps, useMotionValue } from "framer-motion";

export const Zone: React.FC<
  BoxProps & MotionProps & { isSelected: boolean; id: string; size: number }
> = ({ isSelected, id, size, onClick, top, ...animatedCircleProps }) => {
  const zIndex = useMotionValue(isSelected ? 2 : 0);
  console.log(">> ", { zIndex, size, isSelected });
  return (
    <Box position="absolute" display="flex" top={top}>
      <Link onClick={onClick} to={isSelected ? "/profile" : `/profile/${id}`}>
        <AnimatedCircle
          isSelected={isSelected}
          width={isSelected ? "100vw" : size}
          height={isSelected ? "100vh" : size}
          {...animatedCircleProps}
          borderRadius={isSelected ? "0" : "50%"}
        />
      </Link>
    </Box>
  );
};
