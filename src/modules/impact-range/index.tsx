import React from "react";
import Flex from "@chakra-ui/core/dist/Flex";
import Text from "@chakra-ui/core/dist/Text";
import { useRecoilState } from "recoil";
import { ImpactZonesNav } from "./impact-zones";
import { impactZone } from "./state";
import { TextBrand } from "../../components/atoms/brand";

// import { VotingSlider } from "../../components/molecules/voting-slider";

export const ImpactSelector: React.FC = () => {
  const [zone, setZone] = useRecoilState(impactZone);

  console.log(">> ", { zone });
  return (
    <Flex position="relative" direction="column" alignItems="center">
      <TextBrand />
      <ImpactZonesNav />
      <Text onClick={() => setZone("")}>Active Zone: {zone}</Text>
      {/* <VotingSlider /> */}
    </Flex>
  );
};
