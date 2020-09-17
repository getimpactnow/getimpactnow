import React from "react";
import issue from "ic:canisters/issue";
import { useRecoilValue } from "recoil";
import { activeZone } from "../impact-zone/state";

import { Flex } from "@chakra-ui/core";
import { Lane } from "./lane";
import { Lanes } from "./state";

interface IssueLanesProps {
  activeLane: Lanes;
}

interface Issue {
  id: string;
  title: string;
  description: string;
  state: Lanes;
  zone: string;
}

export const IssueLanes: React.FC<IssueLanesProps> = ({ activeLane }) => {
  const zone = useRecoilValue(activeZone);
  const [issues, setIssue] = React.useState<Issue[]>([]);

  React.useEffect(() => {
    const load = async () => {
      const issues = await issue.getIssues();
      setIssue(issues);
    };
    load();
  }, []);

  const issuesByState = issues
    .filter((issue) => issue.zone === (zone ? zone.zone : ""))
    .reduce(
      (acc, { id, title, description, state, zone }) => {
        const current = acc[state];
        if (current) {
          return {
            ...acc,
            [state]: [...acc[state], { id, title, description, zone }],
          };
        }
        return { ...acc, [state]: [{ id, title, description, zone }] };
      },
      {
        [Lanes.upcoming]: [],
        [Lanes.ideation]: [],
        [Lanes.proposals]: [],
        [Lanes.decissions]: [],
      }
    );
  console.log(">> ", { issuesByState, zone });
  return (
    <Flex direction="row">
      <Lane title={activeLane} cards={issuesByState[activeLane]} />
    </Flex>
  );
};
