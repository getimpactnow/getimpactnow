import React from "react";
import { BoxProps } from "@chakra-ui/core/dist/Box";
import { Link } from "react-router-dom";
import { AnimatedCircle } from "../../components/atoms/circle-animated";
import { motion, MotionProps } from "framer-motion";
import { ZoneCard } from "./zone-card";
// import { openSpring, closeSpring } from "./animations";

export const Zone: React.FC<
  BoxProps &
    MotionProps & {
      isSelected: boolean;
      zone: string;
      size: number;
      top: string;
    }
> = ({ isSelected, zone, size, onClick, top, ...animatedCircleProps }) => {
  const topPosition = isSelected ? 0 : top;
  const zIndex = isSelected ? 1 : 0;

  return (
    <motion.div style={{ top: topPosition, position: "absolute", zIndex }}>
      <Link onClick={onClick} to={isSelected ? "/profile" : `/profile/${zone}`}>
        <AnimatedCircle
          isSelected={isSelected}
          width={isSelected ? "100vw" : size}
          height={isSelected ? "100vh" : size}
          boxShadow="0px 0px 4px 2px rgba(0,0,0,0.25)"
          {...animatedCircleProps}
          borderRadius={isSelected ? "0" : "50%"}
        >
          {isSelected && <ZoneCard zoneId={zone} />}
        </AnimatedCircle>
      </Link>
    </motion.div>
  );
};
