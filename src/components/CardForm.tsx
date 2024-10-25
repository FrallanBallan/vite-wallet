import React, { useState } from "react";
import { useCardContext } from "../context/CardContext";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

// interface CardProps {
//   id: number;
//   cardNumber: number;
//   cardHolder: string;
//   bankName: string;
//   active: boolean;
// }

const CardForm = () => {
  const [name, setName] = useState("");
  const [bank, setBank] = useState("");
  const [number, setNumber] = useState<number | null>(null);
  const { addCard } = useCardContext();
  const navigate = useNavigate();

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();

    const newCard = {
      id: Date.now(),
      cardNumber: number ?? 0,
      cardHolder: name,
      bankName: bank,
      active: false,
    };
    addCard(newCard);
    navigate("/cardpage");
  };
  return (
    <div className="p-4 border border-black">
      <h2>Add New Card</h2>
      <Card
        id={Date.now()}
        cardNumber={number ?? 0}
        cardHolder={name}
        bankName={bank}
        active={false}
      />
      <form onSubmit={handleAddCard} className="flex flex-col gap-2">
        <input
          value={name}
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={bank}
          type="text"
          placeholder="Bank"
          onChange={(e) => setBank(e.target.value)}
        />
        <input
          value={number ?? ""}
          type="number"
          placeholder="Card Number"
          onChange={(e) => setNumber(Number(e.target.value))}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CardForm;
