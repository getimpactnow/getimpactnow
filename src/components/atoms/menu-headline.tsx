import React from "react";
import Heading, { HeadingProps } from "@chakra-ui/core/dist/Heading";

export const MenuHeadline: React.FC<HeadingProps> = ({
  children,
  ...headingProps
}) => {
  return (
    <Heading as="h2" size="lg" color="yellow" {...headingProps}>
      {children}
    </Heading>
  );
};
