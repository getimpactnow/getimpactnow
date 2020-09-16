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

const HEADER_SPACING = 3;

const impactZones = [
  {
    range: Zones.union,
    size: 500,
    color: "sky.900",
    top: `${1 + HEADER_SPACING}rem`,
  },
  {
    range: Zones.nation,
    size: 400,
    color: "pink.900",
    top: `${2 + HEADER_SPACING}rem`,
  },
  {
    range: Zones.state,
    size: 300,
    color: "cobalt.900",
    top: `${3 + HEADER_SPACING}rem`,
  },
  {
    range: Zones.region,
    size: 200,
    color: "lilac.900",
    top: `${4 + HEADER_SPACING}rem`,
  },
];

export const ImpactZones: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
}) => {
  const [, setZone] = useRecoilState(impactZone);
  console.log(">> ImpactZones");

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
          isSelected={match.params.id === zone.range}
          id={zone.range}
          key={zone.range}
          top={zone.top}
          size={zone.size}
          onClick={() => {
            console.log(">> onClick", { zone: zone.range });
            setZone(zone.range);
          }}
          backgroundColor={zone.color}
        />
      ))}
      <Avatar top={"4rem"} width={100} height={100} />
    </Flex>
  );
};

export const ImpactZonesNav = () => {
  return <Route path={["/profile/:id", "/profile"]} component={ImpactZones} />;
};
