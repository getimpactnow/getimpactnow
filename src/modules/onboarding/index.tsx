import React from "react";
import { useRecoilState } from "recoil";
import Flex from "@chakra-ui/core/dist/Flex";
import { CloseButton, Heading } from "@chakra-ui/core";

import { sections } from "./state";
import { onboarding } from "../onboarding/state";
import { Circle } from "../../components/atoms/circle";

export const OnboardingContent: React.FC = () => {
  const [, setOnboarding] = useRecoilState(onboarding);
  const handleFinishOnboarding = React.useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setOnboarding(true);
    },
    [setOnboarding]
  );
  return (
    <Flex
      direction="column"
      alignItems="center"
      height="calc(100vh - 16rem)"
      width="100%"
      margin="12rem 0rem"
      padding="1rem"
      overflow="scroll"
    >
      <Circle
        backgroundColor="white"
        color="black"
        position="absolute"
        right="1rem"
      >
        <CloseButton onClick={handleFinishOnboarding} />
      </Circle>
      <Heading as="h1" marginBottom="2rem">
        Digital Democracy
      </Heading>
      {sections.map((section) => {
        console.log(">> ", { section });
        return (
          <Flex direction="column" width="100%">
            <Heading as="h2" size="md">
              {section.id}
            </Heading>
            <Flex direction="row">
              <section.icon width="64" height="64" />
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};
