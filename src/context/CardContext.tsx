import React, { createContext, ReactNode, useContext, useState } from "react";

//Defining a Card Object!
type Card = {
  id: number;
  cardNumber: number;
  cardHolder: string;
  bankName: string;
  active: boolean;
};

//Defining the store, cards and the function to add a card!
interface CardContextType {
  cards: Card[];
  addCard: (card: Card) => void; //Void represents absence of a value
  //The intention is a side effect, adding a card, not producing a result
  deleteCard: (card: Card) => void;
}

//Creating the actual context, initialized as undefined
const CardContext = createContext<CardContextType | undefined>(undefined);

//This is a custom hook so we can use CardContext in other components
export const useCardContext = () => {
  const context = useContext(CardContext); //Access the context
  if (!context) {
    throw new Error("useCardContext must be within a CardProvider");
  }
  return context;
};

//This is the provider component that will wrap the part of the app that need the access to cardContext
export const CardProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  //The state of cards
  const [cards, setCards] = useState<Card[]>(() => {
    const storedCards = localStorage.getItem("cards");
    return storedCards ? JSON.parse(storedCards) : [];
  }); //This stores the cards in state

  //The function that adds and pushes new card to array
  const addCard = (card: Card) => {
    const newCards = [...cards, card];
    setCards(newCards);
    localStorage.setItem("cards", JSON.stringify(newCards));
  };
  //!! const deleteCard = (id: number) => { setCards((prevCards) => prevcards.filter((card) => card.id !== id))}
  const deleteCard = (cardToDelete: Card) => {
    const newCards = cards.filter((card) => card.id !== cardToDelete.id);
    setCards(newCards);
    localStorage.setItem("cards", JSON.stringify(newCards));
  };
  return (
    <CardContext.Provider value={{ cards, addCard, deleteCard }}>
      {children}
    </CardContext.Provider>
  );
};
