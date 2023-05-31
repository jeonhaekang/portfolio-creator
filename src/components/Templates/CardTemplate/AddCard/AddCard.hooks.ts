import { useCallback } from "react";
import { useForm } from "~/hooks";
import { CARD_INIT } from "./AddCard.constants";
import { AddCardProps } from "./AddCard.types";

export const useAddCard = ({ onAdd }: AddCardProps) => {
  const cardForm = useForm(CARD_INIT);

  const addCardHandler = useCallback(() => {
    onAdd(cardForm.data);
  }, [cardForm.data, onAdd]);

  return {
    cardForm,
    addCardHandler
  };
};
