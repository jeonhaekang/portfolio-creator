import { useCallback, useEffect, useState } from "react";
import { useForm } from "~/hooks";
import { CardForm } from "./AddCard";
import { CARD_TEMPLATE_INIT } from "./CardTemplate.constants";
import { CardTemplateProps } from "./CardTemplate.types";

export const useCardTemplate = ({
  id,
  onChange,
  defaultValue
}: CardTemplateProps) => {
  const cardFrom = useForm({
    ...CARD_TEMPLATE_INIT,
    ...defaultValue
  });

  const [cards, setCards] = useState<CardForm[]>([]);

  const onAddCardHandler = useCallback(
    (card: CardForm) => setCards(prev => [...prev, card]),
    []
  );

  useEffect(() => {
    onChange && onChange(id, { ...cardFrom.data, cards });
  }, [cardFrom.data, cards, id, onChange]);

  return { cards, cardFrom, onAddCardHandler };
};
