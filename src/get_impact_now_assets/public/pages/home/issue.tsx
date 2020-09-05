// @ts-ignore
import get_impact_now from "ic:canisters/get_impact_now";
import React from "react";
import Flex from "@chakra-ui/core/dist/Flex";
import { SideBar } from "../../components/organisms/sidebar";
import Box from "@chakra-ui/core/dist/Box";
import Text from "@chakra-ui/core/dist/Text";
import { useParams } from "react-router-dom";

export const IssuePage: React.FC = () => {
  const { issueId } = useParams<{ issueId: string }>();
  const [issue, setIssue] = React.useState();
  console.log(">> ", { issueId, issue });

  React.useEffect(() => {
    const load = async () => {
      const i = await get_impact_now.getIssue(parseInt(issueId, 10));
      if (i) {
        setIssue(i);
      }
    };
    load();
  }, [issueId]);

  return (
    <Flex height="100vh" width="100vw">
      <SideBar />
      <Flex flexDir="column" flex="1" backgroundColor="blackAlpha.300">
        <Box>
          <Text>Issue.id: {issueId}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};
