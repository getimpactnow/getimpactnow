import React from "react";
import Flex from "@chakra-ui/core/dist/Flex";
import Box from "@chakra-ui/core/dist/Box";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeZone, activeZoneId } from "./state";
import { onboarding } from "../onboarding/state";
import { Dashboard } from "../dashboard";
import { FaClosedCaptioning } from "react-icons/fa";
import { Icon } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { Circle } from "../../components/atoms/circle";

interface ZoneCardProps {
  zoneId: string;
}
export const ZoneCard: React.FC<ZoneCardProps> = ({ zoneId }) => {
  const zone = useRecoilValue(activeZone);
  const [, setActiveZoneId] = useRecoilState(activeZoneId);
  const isOnboarded = useRecoilState(onboarding);

  if (!zone) {
    return null;
  }
  console.log(">> ", { zone });

  return (
    <Flex
      direction="column"
      justifyItems="center"
      alignItems="center"
      height="100vh"
      width="100vw"
    >
      <Link to="/">
        <Circle
          onClick={() => setActiveZoneId("")}
          width="2rem"
          height="2rem"
          position="absolute"
          color="boostr.900"
          alignItems="center"
          justifyContent="center"
          display="flex"
          top="1rem"
          left="1rem"
          backgroundColor="whiteAlpha.900"
        >
          <Icon name="arrow-back" />
        </Circle>
      </Link>
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
