import { useCallback } from "react";
import { useForm } from "~/hooks";
import { CARD_INIT } from "./AddCardEditor.constants";
import { AddCardEditorProps } from "./AddCardEditor.types";

export const useAddCardEditor = ({ onAdd }: AddCardEditorProps) => {
  const cardForm = useForm(CARD_INIT);

  const addCardHandler = useCallback(() => {
    onAdd(cardForm.data);

    cardForm.controller.reset();
  }, [cardForm, onAdd]);

  return {
    cardForm,
    addCardHandler
  };
};
