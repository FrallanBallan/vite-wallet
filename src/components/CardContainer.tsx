import React from "react";
import { useCardContext } from "../context/CardContext";
import Card from "./Card";

interface CardContainerProps {
  showActive: boolean;
}

const CardContainer: React.FC<CardContainerProps> = ({ showActive }) => {
  const { cards } = useCardContext();

  const filteredCards = cards.filter((card) => card.active === showActive);

  return (
    <div
      className={
        "flex flex-col overflow-y-auto h-[20vh] mt-2 gap-2 scrollbar-hide rounded-md bg-opacity-80"
      }
    >
      {filteredCards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          cardNumber={card.cardNumber}
          cardHolder={card.cardHolder}
          bankName={card.bankName}
          active={card.active}
        />
      ))}
    </div>
  );
};

export default CardContainer;
