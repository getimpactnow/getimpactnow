import React from "react";
import Box, { BoxProps } from "@chakra-ui/core/dist/Box";

export const Circle: React.FC<BoxProps> = React.forwardRef(
  ({ children, ...boxProps }, ref) => {
    return (
      <Box ref={ref} borderRadius="50%" {...boxProps}>
        {children}
      </Box>
    );
  }
);
