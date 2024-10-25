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
  const navigate = useNavigate();
  //handleClick - navigates to "http://localhost:5173/card/1729238759462"
  const handleClick = () => {
    navigate(`/card/${id}`);
  };

  return (
    <div
      className=" flex flex-col justify-between w-full max-w-sm h-[200px] bg-gradient-to-r from-[#E0F2FE] to-[#A0D6E8] text-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg  hover:shadow-xl hover:bg-opacity-400 cursor-pointer"
      onClick={handleClick}
    >
      <p>id: {id}</p>
      <h3>Card Owner: {cardHolder}</h3>
      <p>Bank: {bankName}</p>
      <p>Card Number: {cardNumber}</p>
      {active ? <p>Active Card</p> : <p>Inactive Card</p>}
    </div>
  );
};

export default Card;
