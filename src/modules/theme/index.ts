import { theme, ITheme } from "@chakra-ui/core";
import { colors } from "./colors";

type BreakPoints = string[] & {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
};

export const modes = {
  dark: "@media (prefers-color-scheme: dark)",
  light: "@media (prefers-color-scheme: light)",
};

const breakpointNames = ["xs", "sm", "md", "lg", "xl"];

const breakpoints: BreakPoints = ["20em", "30em", "48em", "62em", "80em"];
breakpointNames.map(
  (name: any, index) => (breakpoints[name] = breakpoints[index])
);

export const mediaQueries = breakpointNames.reduce<{
  [key: string]: string;
}>(
  (acc, bp: any) => ({
    ...acc,
    [bp]: `@media (min-width: ${breakpoints[bp]})`,
  }),
  modes
);

const getImpactNowTheme = {
  ...theme,
  breakpoints,
  dark: {
    backgroundColor: colors.boostr[900],
    color: theme.colors.whiteAlpha[900],
  },
  light: {
    backgroundColor: theme.colors.white,
    color: colors.boostr[900],
  },
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  colors: {
    ...theme.colors,
    ...colors,
    getimpactnow: {
      100: "#969cc5",
      200: "#7f84a7",
      300: "#6f7496",
      400: "#616582",
      500: "#575b75",
      600: "#50546d",
      700: "#494c63",
      800: "#3d415a",
      900: "#282a37",
    },
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
};

export type IGetImpactNowTheme = ITheme & typeof getImpactNowTheme;

export default getImpactNowTheme;
