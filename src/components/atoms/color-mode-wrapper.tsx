import { BoxProps } from "@chakra-ui/core";
import React from "react";
import Box from "@chakra-ui/core/dist/Box";
import { usePreferredColorScheme } from "../../modules/theme/hooks";

export const ColorModeWrapper: React.FC<BoxProps> = ({
  children,
  ...boxProps
}) => {
  const { theme, colorMode } = usePreferredColorScheme() as {
    theme: any;
    colorMode: "light" | "dark";
  };
  console.log(">> ", { colorMode });
  return (
    <Box
      background={theme[colorMode].backgroundColor}
      color={theme[colorMode].color}
      height="100vh"
      width="100vw"
      overflow="hidden"
      {...boxProps}
    >
      {children}
    </Box>
  );
};
