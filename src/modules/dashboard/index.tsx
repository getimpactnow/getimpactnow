import Flex from "@chakra-ui/core/dist/Flex";
import React from "react";
import { MobileLaneNav } from "../../components/organisms/mobile-lane-nav";
import { AddIssueFab } from "../issues/add-issue-fab";
import { IssueLanes } from "../issues/issue-lanes";

export const Dashboard: React.FC = () => {
  const handleAddIssue = React.useCallback(() => {
    console.log(">> Dashboard onUpdate");
  }, []);
  return (
    <Flex display="column">
      <IssueLanes activeLane={"test"} />
      <AddIssueFab onUpdate={handleAddIssue} />
      <MobileLaneNav />
    </Flex>
  );
};
