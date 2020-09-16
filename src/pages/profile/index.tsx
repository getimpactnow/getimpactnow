import React from "react";
import Flex from "@chakra-ui/core/dist/Flex";
import Text from "@chakra-ui/core/dist/Text";
import { useRecoilState } from "recoil";

import { ImpactSelector } from "../../modules/impact-range";
import { TextBrand } from "../../components/atoms/brand";
import { impactZone } from "../../modules/impact-range/state";

export const Profile: React.FC = () => {
  const [zone, setZone] = useRecoilState(impactZone);
  return (
    <Flex
      position="relative"
      direction="column"
      alignItems="center"
      width="100%"
    >
      <TextBrand />
      <ImpactSelector />
      <Text onClick={() => setZone("")}>Active Zone: {zone}</Text>
    </Flex>
  );
};
