import Box from "@chakra-ui/core/dist/Box";
import React from "react";
import { VotingSlider } from "../../components/molecules/voting-slider";
import { ImpactZonesNav } from "./impact-zones";

export const ImpactSelector: React.FC = () => {
  return (
    <Box>
      <Box margin="auto" padding="1rem" maxWidth="12rem">
        <ImpactZonesNav />
        <VotingSlider />
      </Box>
    </Box>
  );
};
