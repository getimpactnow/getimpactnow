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
      whileHover={
        !isSelected
          ? {
              scale: 1.01,
            }
          : {}
      }
      whileTap={!isSelected ? { scale: 0.99 } : {}}
      border="1px"
      borderColor="whiteAlpha.300"
      {...animatedCircleProps}
    />
  );
};
