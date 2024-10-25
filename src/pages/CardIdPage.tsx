import React, { ReactNode, useState } from "react";
import { useParams } from "react-router-dom";
import { useCardContext } from "../context/CardContext";
import Card from "../components/Card";
import MainWrap from "../components/MainWrap";

const CardIdPage: React.FC = () => {
  const [newOwner, setNewOwner] = useState("");
  const [newBank, setNewBank] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const { id } = useParams<{ id: string }>();
  const { cards, deleteCard, editCard, activateCard } = useCardContext();

  const card = cards.find((card) => card.id === Number(id));

  //DELETE
  const handleDelete = () => {
    if (card) {
      deleteCard(card);
    }
  };
  //EDIT
  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    const freshlyEditedCard = {
      ...card,
      id: Number(id),
      cardNumber: parseInt(newNumber),
      cardHolder: newOwner,
      bankName: newBank,
      active: false,
    };
    editCard(freshlyEditedCard);
  };
  //ACTIVATE CARD
  const handleActive = () => {
    if (card) {
      activateCard(card);
      alert(` card for: ${card.cardHolder}`);
    }
  };

  if (!card) {
    return <h2>No card found by that id</h2>;
  }
  return (
    <MainWrap>
      <Card
        id={card.id}
        cardNumber={card.cardNumber}
        cardHolder={card.cardHolder}
        bankName={card.bankName}
        active={card.active}
      />
      <form action="submit" className="flex flex-col w-full gap-2 p-2">
        <input
          onChange={(e) => setNewOwner(e.target.value)}
          value={newOwner}
          type="text"
          placeholder="Change Card Owner"
        />
        <input
          onChange={(e) => setNewBank(e.target.value)}
          value={newBank}
          type="text"
          placeholder="Change Bank"
        />
        <input
          onChange={(e) => setNewNumber(e.target.value)}
          value={newNumber ?? ""}
          type="number"
          placeholder="Change Card Number"
        />
      </form>
      <div className="flex w-full">
        <button onClick={handleDelete} className="flex-1 bg-red-100">
          Delete
        </button>
        <button onClick={handleEdit} className="flex-1 bg-blue-100">
          Edit
        </button>
        <button onClick={handleActive} className="flex-1 bg-blue-100">
          {!card.active ? "Activate Card" : "Deactivate Card"}
        </button>
      </div>
    </MainWrap>
  );
};

export default CardIdPage;
