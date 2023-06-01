import { useCallback, useEffect, useState } from "react";
import { useForm } from "~/hooks";
import { EditorProps } from "../../Template.types";
import { AddCardEditorForm } from "./AddCardEditor";
import { CARD_EDITOR_FORM_INIT } from "./CardEditor.constants";
import { CardEditorFrom } from "./CardEditor.types";

export const useCardEditor = ({
  id,
  defaultValue,
  onChange
}: EditorProps<CardEditorFrom>) => {
  const cardForm = useForm({ ...CARD_EDITOR_FORM_INIT, ...defaultValue });

  const [cards, setCards] = useState<AddCardEditorForm[]>(
    defaultValue?.cards || []
  );

  const onAddCardHandler = useCallback(
    (card: AddCardEditorForm) => setCards(prev => [...prev, card]),
    []
  );

  useEffect(() => {
    onChange(id, { ...cardForm.data, cards });
  }, [cardForm.data, cards, id, onChange]);

  return {
    cards,
    cardForm,
    onAddCardHandler
  };
};
