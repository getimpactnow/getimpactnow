import React from "react";
import Box from "@chakra-ui/core/dist/Box";
import Text from "@chakra-ui/core/dist/Text";
import { useRecoilState } from "recoil";
import { ImpactZonesNav } from "./impact-zones";
import { impactZone } from "./state";

// import { VotingSlider } from "../../components/molecules/voting-slider";

export const ImpactSelector: React.FC = () => {
  const [zone, setZone] = useRecoilState(impactZone);

  console.log(">> ", { zone });
  return (
    <Box position="relative">
      <Text>get.impact.now</Text>
      <ImpactZonesNav />
      <Text onClick={() => setZone("")}>Active Zone: {zone}</Text>
      {/* <VotingSlider /> */}
    </Box>
  );
};
