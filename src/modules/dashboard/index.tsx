// import issue from "ic:canisters/issue";
import Flex from "@chakra-ui/core/dist/Flex";
import React from "react";
import { useRecoilState } from "recoil";
import { MobileLaneNav } from "../../components/organisms/mobile-lane-nav";
import { AddIssueFab } from "../issues/add-issue-fab";
import { IssueLanes } from "../issues/issue-lanes";
import { activeIssueLane } from "../issues/state";
// import { issues } from "../issues/state";

export const Dashboard: React.FC = () => {
  const [activeLane] = useRecoilState(activeIssueLane);
  // const [, setIssues] = useRecoilState(issues);

  const handleAddIssue = React.useCallback(async () => {
    // const issues = await issue.getIssues();
    // setIssues(issues);
    console.log(">> Dashboard handleAddIssue");
  }, []);

  return (
    <Flex display="column">
      <IssueLanes activeLane={activeLane} />
      <AddIssueFab onUpdate={handleAddIssue} />
      <MobileLaneNav />
    </Flex>
  );
};
