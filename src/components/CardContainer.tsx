import React from "react";
import { useCardContext } from "../context/CardContext";
import Card from "./Card";

const CardContainer: React.FC = () => {
  const { cards } = useCardContext();
  return (
    <div>
      {cards.map((card) => (
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
