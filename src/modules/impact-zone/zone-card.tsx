import React from "react";
import Flex from "@chakra-ui/core/dist/Flex";
import Box from "@chakra-ui/core/dist/Box";
import { useRecoilValue } from "recoil";
import { activeZone } from "./state";

interface ZoneCardProps {
  zoneId: string;
}
export const ZoneCard: React.FC<ZoneCardProps> = ({ zoneId }) => {
  const zone = useRecoilValue(activeZone);

  if (!zone) {
    return null;
  }

  return (
    <Flex
      direction="column"
      marginTop="4rem"
      justifyItems="center"
      alignItems="center"
    >
      <Box>
        in {zoneId}: {zone.title}
      </Box>
    </Flex>
  );
};
