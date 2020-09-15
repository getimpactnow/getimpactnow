import React from "react";
import { BoxProps } from "@chakra-ui/core/dist/Box";
import { motion, MotionProps } from "framer-motion";
import { Circle } from "../circle";
// import { openSpring, closeSpring } from "./animations";

const MotionCircle = motion.custom(Circle);

export const AnimatedCircle: React.FC<
  BoxProps & MotionProps & { isSelected: boolean }
> = ({ children, isSelected, ...animatedCircleProps }) => {
  console.log(">> ", { isSelected });
  return (
    <MotionCircle
      // layoutTransition={isSelected ? openSpring : closeSpring}
      children={children}
      whileHover={{
        scale: 1.01,
        borderColor: "rgba(255, 255, 255, 1)",
      }}
      whileTap={{ scale: 0.99, borderColor: "rgba(255, 255, 255, 1)" }}
      border="1px"
      borderColor="whiteAlpha.300"
      margin="0.5rem" // growing space
      {...animatedCircleProps}
    />
  );
};
