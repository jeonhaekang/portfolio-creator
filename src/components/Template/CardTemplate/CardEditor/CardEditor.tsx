import {
  AdjustInput,
  AdjustTextarea,
  BgColorController,
  EditorProps,
  OrderController
} from "~/components";
import { Card, CardSection, ResponsiveMasonry } from "../Shared";
import { AddCardEditor } from "./AddCardEditor";
import { useCardEditor } from "./CardEditor.hooks";
import { CardEditorFrom } from "./CardEditor.types";

export const CardEditor = (props: EditorProps<CardEditorFrom>) => {
  const { cardForm, cards, onAddCardHandler } = useCardEditor(props);

  return (
    <CardSection>
      <AdjustInput fontSize="heading1" {...cardForm.register("title")} />

      <AdjustTextarea
        fontSize="paragraph2"
        {...cardForm.register("description")}
      />

      <ResponsiveMasonry>
        {...cards.map((card, idx) => <Card key={`card_${idx}`} {...card} />)}

        <AddCardEditor onAdd={onAddCardHandler} />
      </ResponsiveMasonry>

      <BgColorController id={props.id} />
      <OrderController id={props.id} />
    </CardSection>
  );
};
