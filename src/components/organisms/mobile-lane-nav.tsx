import Flex, { FlexProps } from "@chakra-ui/core/dist/Flex";
import React, { SyntheticEvent } from "react";
import {
  FaComment,
  FaBroadcastTower,
  FaLightbulb,
  FaVoteYea,
} from "react-icons/fa";
import { useRecoilState } from "recoil";
import { Lane } from "../../modules/issues/lane";
import { activeIssueLane, Lanes } from "../../modules/issues/state";

const NavTab: React.FC<FlexProps & { lane: Lanes }> = ({
  lane,
  children,
  ...flexProps
}) => {
  const [activeLane, setActiveLane] = useRecoilState(activeIssueLane);
  const isActiveLane = React.useCallback(
    (lane: Lanes) => {
      return lane === activeLane;
    },
    [activeLane]
  );

  const handleTabSelection = (lane: Lanes) => (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveLane(lane);
  };

  return (
    <Flex
      padding="1rem"
      {...flexProps}
      onClick={handleTabSelection(lane)}
      backgroundColor={isActiveLane(lane) ? "boostr.600" : "boostr.900"}
    >
      {children}
    </Flex>
  );
};

const SIZE = 32;

export const MobileLaneNav: React.FC = () => {
  console.log(">> MobileLaneNav");

  return (
    <Flex
      direction="row"
      position="absolute"
      bottom="0"
      left="0"
      right="0"
      justifyContent="space-around"
      borderTop="1px solid white"
      backgroundColor="boostr.900"
      boxShadow="0px 0px 4px 2px rgba(0,0,0,0.25)"
    >
      <NavTab lane={Lanes.upcoming}>
        <FaBroadcastTower size={SIZE} />
      </NavTab>
      <NavTab lane={Lanes.ideation}>
        <FaLightbulb size={SIZE} />
      </NavTab>
      <NavTab lane={Lanes.proposals}>
        <FaComment size={SIZE} />
      </NavTab>
      <NavTab lane={Lanes.decissions}>
        <FaVoteYea size={SIZE} />
      </NavTab>
    </Flex>
  );
};
