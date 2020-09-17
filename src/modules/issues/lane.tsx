import Box from "@chakra-ui/core/dist/Box";
import Flex from "@chakra-ui/core/dist/Flex";
import Heading from "@chakra-ui/core/dist/Heading";
import React from "react";
import { Card } from "../../components/organisms/card";

interface Card {
  id: string;
  title: string;
  description: string;
}

interface LaneProps {
  title: string;
  cards: Card[];
}

export const Lane: React.FC<LaneProps> = ({ cards, title }) => {
  return (
    <Flex direction="column" marginTop="1rem" marginX="1rem" minWidth="90vw">
      <Box
        paddingY="0.5rem"
        borderBottom="1px solid white"
        marginBottom="0.5rem"
      >
        <Heading as="h2">{title.toUpperCase()}</Heading>
      </Box>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
        />
      ))}
    </Flex>
  );
};
