import React from "react";
import Heading, { HeadingProps } from "@chakra-ui/core/dist/Heading";

export const MenuItem: React.FC<HeadingProps> = ({
  children,
  ...headingProps
}) => {
  return (
    <Heading as="h3" size="sm" {...headingProps}>
      {children}
    </Heading>
  );
};
