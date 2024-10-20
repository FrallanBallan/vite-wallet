import React from "react";
import { useParams } from "react-router-dom";
import { useCardContext } from "../context/CardContext";
import Card from "../components/Card";

const CardIdPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { cards } = useCardContext();

  const card = cards.find((card) => card.id === Number(id));

  if (!card) {
    return <h2>No card found by that id</h2>;
  }
  return (
    <Card
      id={card.id}
      cardNumber={card.cardNumber}
      cardHolder={card.cardHolder}
      bankName={card.bankName}
      active={card.active}
    />
  );
};

export default CardIdPage;
