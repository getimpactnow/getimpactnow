// @ts-ignore
import get_impact_now from "ic:canisters/issue";
import React from "react";
import Flex from "@chakra-ui/core/dist/Flex";
import { SideBar } from "../../components/organisms/sidebar";
import { TopBar } from "../../components/organisms/top-bar";
import { Card } from "../../components/atoms/card";
import Grid from "@chakra-ui/core/dist/Grid";
import { AddIssueFab } from "../../modules/issues/add-issue-fab";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  const [issues, setIssues] = React.useState<
    Array<{ id: string; description: string }>
  >([]);
  console.log(">> ", { issues });

  const updateIssues = React.useCallback(async () => {
    const issues = await get_impact_now.getIssues();
    setIssues(issues);
  }, []);

  React.useEffect(() => {
    updateIssues();
  }, [updateIssues]);

  return (
    <Flex height="100vh" width="100vw">
      <SideBar />
      <Flex flexDir="column" flex="1" backgroundColor="blackAlpha.300">
        <TopBar />
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap="2"
          padding="1rem"
        >
          {issues.map((issue) => (
            <Link to={`/issues/${issue.id}`}>
              <Card backgroundColor="green.800">{issue.description}</Card>
            </Link>
          ))}
        </Grid>
      </Flex>
      <AddIssueFab onUpdate={updateIssues} />
    </Flex>
  );
};
