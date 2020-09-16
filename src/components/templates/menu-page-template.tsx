import React from "react";
import HeaderNav from "../organisms/Header";
import SimplePage from "./simple-page";

type LayoutProps = {
  noIndexNoFollow?: boolean;
  title?: string;
  metaDescription?: string;
};

const BasePageTemplate: React.FunctionComponent<LayoutProps> = ({
  children,
  noIndexNoFollow,
  title,
  metaDescription,
}) => {
  return (
    <SimplePage title={title} metaDescription={metaDescription}>
      <HeaderNav />
      {children}
    </SimplePage>
  );
};

export default BasePageTemplate;
