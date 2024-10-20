import React, { useContext } from "react";
import { useCardContext } from "../context/CardContext";
import { useNavigate } from "react-router-dom";

type CardProps = {
  id: number;
  cardNumber: number;
  cardHolder: string;
  bankName: string;
  active: boolean;
};

const Card: React.FC<CardProps> = ({
  id,
  cardNumber,
  cardHolder,
  bankName,
  active,
}) => {
  const { deleteCard } = useCardContext();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/card/${id}`);
  };
  const handleDelete = () => {
    //!! deleteCard(id)
    deleteCard({ id, cardNumber, cardHolder, bankName, active });
  };
  return (
    <div
      className="flex flex-col border border-green items-center p-6 gap-4 rounded-lg bg-sky-300"
      onClick={handleClick}
    >
      <p>id: {id}</p>
      <h3>Card Owner: {cardHolder}</h3>
      <p>Bank: {bankName}</p>
      <p>Card Number: {cardNumber}</p>
      <div className="flex w-full justify-between">
        <button className="grow bg-red-300" onClick={handleDelete}>
          Delete
        </button>
        <button className="grow bg-blue-300">Edit</button>
      </div>
    </div>
  );
};

export default Card;
