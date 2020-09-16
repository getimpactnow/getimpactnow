import React from "react";
import Flex from "@chakra-ui/core/dist/Flex";
import { useRecoilState } from "recoil";
import { impactZone } from "./state";
import { Avatar } from "../../components/atoms/avatar";
import { Route, RouteComponentProps } from "react-router-dom";
import { Zone } from "./zone";

enum Zones {
  region = "region",
  state = "state",
  nation = "nation",
  union = "union",
}

const impactZones = [
  {
    range: Zones.union,
    size: 500,
    color: "sky.900",
    top: "1rem",
  },
  {
    range: Zones.nation,
    size: 400,
    color: "pink.900",
    top: "2rem",
  },
  {
    range: Zones.state,
    size: 300,
    color: "cobalt.900",
    top: "3rem",
  },
  {
    range: Zones.region,
    size: 200,
    color: "lilac.900",
    top: "4rem",
  },
];

export const ImpactZones: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
}) => {
  const [, setZone] = useRecoilState(impactZone);

  return (
    <Flex
      flexDir="column"
      justifyItems="center"
      alignItems="center"
      position="relative"
      height={600}
    >
      {impactZones.map((zone) => (
        <Zone
          isSelected={match.params.id === zone.range}
          id={zone.range}
          key={zone.range}
          top={zone.top}
          size={zone.size}
          onClick={() => {
            setZone(zone.range);
          }}
          backgroundColor={zone.color}
        />
      ))}
      <Avatar top={"1rem"} width={100} height={100} />
    </Flex>
  );
};

export const ImpactZonesNav = () => {
  return <Route path={["/profile/:id", "/profile"]} component={ImpactZones} />;
};
