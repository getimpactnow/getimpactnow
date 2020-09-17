import { Flex } from "@chakra-ui/core";
import React from "react";
import { Lane } from "./lane";

interface IssueLanesProps {
  activeLane: string;
}

export const IssueLanes: React.FC<IssueLanesProps> = ({ activeLane }) => {
  const issuesByLane = {
    test: [
      {
        id: "1",
        title: "Test",
        summary:
          "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
      },
      {
        id: "2",
        title: "Test 2",
        summary:
          "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
      },
    ],
  };
  return (
    <Flex direction="row">
      <Lane cards={issuesByLane.test}></Lane>
    </Flex>
  );
};
