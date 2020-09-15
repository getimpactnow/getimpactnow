import React from "react";
import ChakraAvatar, { AvatarProps } from "@chakra-ui/core/dist/Avatar";

export const Avatar: React.FC<AvatarProps> = ({ ...avatarProps }) => {
  return (
    <ChakraAvatar
      name="Christian Nwamba"
      src="https://bit.ly/code-beast"
      border="1px solid white"
      boxShadow="2px 6px 12px 4px rgba(0,0,0,0.25)"
      {...avatarProps}
    />
  );
};
