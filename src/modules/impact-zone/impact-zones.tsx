import React from "react";
import Flex from "@chakra-ui/core/dist/Flex";
import { useRecoilState } from "recoil";
import { activeZoneId, impactZones } from "./state";
import { Avatar } from "../../components/atoms/avatar";
import { Route, RouteComponentProps } from "react-router-dom";
import { Zone } from "./zone";

export const ImpactZones: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
}) => {
  const [zone, setZone] = useRecoilState(activeZoneId);

  return (
    <Flex
      flexDir="column"
      justifyItems="center"
      alignItems="center"
      width="100%"
      height={600}
    >
      {impactZones.map((zone) => (
        <Zone
          isSelected={match.params.id === zone.zone}
          zone={zone.zone}
          key={zone.zone}
          top={zone.top}
          size={zone.size}
          onClick={() => setZone(zone.zone)}
          backgroundColor={zone.color}
        />
      ))}
      {!zone && <Avatar top={"4rem"} width={100} height={100} zIndex={3} />}
    </Flex>
  );
};

export const ImpactZonesNav = () => {
  return <Route path={["/:id", "/"]} component={ImpactZones} />;
};
