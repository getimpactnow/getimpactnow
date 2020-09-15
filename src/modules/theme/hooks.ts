import React from "react";
import { useColorMode } from "@chakra-ui/core/dist/ColorModeProvider";
import { useTheme } from "@chakra-ui/core/dist/ThemeProvider";

export const usePreferredColorScheme = () => {
  const theme = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();
  React.useEffect(() => {
    const preferred = window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
    if (preferred !== colorMode) {
      toggleColorMode();
    }
  }, [toggleColorMode, colorMode]);
  return { theme, colorMode, toggleColorMode };
};
