import React from "react";
import Flex from "@chakra-ui/core/dist/Flex";
import { SideBar } from "../../components/organisms/sidebar";
import { TopBar } from "../../components/organisms/top-bar";
import { Card } from "../../components/atoms/card";
import Grid from "@chakra-ui/core/dist/Grid";

export const Home: React.FC = () => {
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
          <Card backgroundColor="green.800">Test</Card>
          <Card backgroundColor="red.800">Test</Card>
          <Card backgroundColor="yellow.800">Test</Card>
        </Grid>
      </Flex>
    </Flex>
  );
};
