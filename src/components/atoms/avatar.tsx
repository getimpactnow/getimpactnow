import React from "react";
import ChakraAvatar, { AvatarProps } from "@chakra-ui/core/dist/Avatar";

export const Avatar: React.FC<AvatarProps> = ({ ...avatarProps }) => {
  return (
    <ChakraAvatar
      name="Christian Nwamba"
      // src="https://bit.ly/code-beast"
      src="https://avatars0.githubusercontent.com/u/66416977?s=400&u=4aed8ecc3ec73237d9a07fbd7e58533e2eca406e&v=4"
      border="1px solid white"
      boxShadow="2px 6px 12px 4px rgba(0,0,0,0.25)"
      {...avatarProps}
    />
  );
};
