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
  editCard: (card: Card) => void; //Takes card as parameter of the type Card. then performes side effect
  activateCard: (card: Card) => void;
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

  //ADD
  //The function that adds and pushes new card to array
  const addCard = (card: Card) => {
    const newCards = [...cards, card];
    setCards(newCards);
    localStorage.setItem("cards", JSON.stringify(newCards));
  };
  //DELETE
  //!! const deleteCard = (id: number) => { setCards((prevCards) => prevcards.filter((card) => card.id !== id))}
  const deleteCard = (cardToDelete: Card) => {
    const newCards = cards.filter((card) => card.id !== cardToDelete.id);
    setCards(newCards);
    localStorage.setItem("cards", JSON.stringify(newCards));
  };
  //EDIT
  const editCard = (cardToEdit: Card) => {
    const updatedCards = cards.map((card) =>
      card.id === cardToEdit.id ? cardToEdit : card
    );
    setCards(updatedCards);
    localStorage.setItem("cards", JSON.stringify(updatedCards));
  };
  //ACTIVATE
  const activateCard = (activeCard: Card) => {
    const cardToChange = cards.map((card) =>
      card.id === activeCard.id ? { ...card, active: !card.active } : card
    );
    setCards(cardToChange);
    localStorage.setItem("cards", JSON.stringify(cardToChange));
  };
  return (
    <CardContext.Provider
      value={{ cards, addCard, deleteCard, editCard, activateCard }}
    >
      {children}
    </CardContext.Provider>
  );
};
