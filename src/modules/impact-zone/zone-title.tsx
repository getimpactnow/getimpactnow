import React from "react";
import Text from "@chakra-ui/core/dist/Text";
import { impactZones } from "./state";

interface ZoneTitleProps {
  zoneId: string;
}

export const ZoneTitle: React.FC<ZoneTitleProps> = ({ zoneId }) => {
  const thezone = impactZones.find((zone) => zone.zone === zoneId);
  if (!thezone) {
    return null;
  }
  return <Text marginBottom="0.75rem">{thezone.title}</Text>;
};
