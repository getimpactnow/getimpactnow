import Flex from "@chakra-ui/core/dist/Flex";
import React from "react";
import { Card } from "../../components/organisms/card";

interface Card {
  id: string;
  title: string;
  summary: string;
}

interface LaneProps {
  cards: Card[];
}

export const Lane: React.FC<LaneProps> = ({ cards }) => {
  return (
    <Flex direction="column" padding="1rem">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          summary={card.summary}
        />
      ))}
    </Flex>
  );
};
