import React from "react";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import { Helmet } from "react-helmet";
import theme from "../../modules/theme";
import { ColorModeWrapper } from "../atoms/color-mode-wrapper";

type LayoutProps = {
  noIndexNoFollow?: boolean;
  title?: string;
  metaDescription?: string;
};

const SimplePage: React.FunctionComponent<LayoutProps> = ({
  children,
  noIndexNoFollow,
  title,
  metaDescription,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        {noIndexNoFollow && <meta name="robots" content="noindex, follow" />}
        {title && <title>{title}</title>}
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#009EAE"></meta>
        {metaDescription && (
          <meta name="description" content={metaDescription} />
        )}
        <meta
          name="p:domain_verify"
          content="18792fff6d719b3c8f085df6d777ef90"
        />
      </Helmet>

      <ColorModeProvider>
        <ColorModeWrapper>{children}</ColorModeWrapper>
      </ColorModeProvider>
      <CSSReset />
    </ThemeProvider>
  );
};

export default SimplePage;
