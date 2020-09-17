import React from "react";
import Flex from "@chakra-ui/core/dist/Flex";
import Box from "@chakra-ui/core/dist/Box";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeZone } from "./state";
import { onboarding } from "../onboarding/state";
import { Dashboard } from "../dashboard";

interface ZoneCardProps {
  zoneId: string;
}
export const ZoneCard: React.FC<ZoneCardProps> = ({ zoneId }) => {
  const zone = useRecoilValue(activeZone);
  const isOnboarded = useRecoilState(onboarding);

  if (!zone) {
    return null;
  }

  return (
    <Flex
      direction="column"
      justifyItems="center"
      alignItems="center"
      height="100vh"
      width="100vw"
    >
      <Box
        display="flex"
        width="100%"
        flexDirection="column"
        alignItems="center"
        paddingTop="3rem"
      >
        in {zoneId}: {zone.title}
        {isOnboarded && <Dashboard />}
      </Box>
    </Flex>
  );
};
