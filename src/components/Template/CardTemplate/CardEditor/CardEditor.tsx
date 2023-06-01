import {
  AdjustInput,
  AdjustTextarea,
  BgColorPicker,
  Controller
} from "~/components";
import { EditorProps } from "../../Template.types";
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

      <BgColorPicker id={props.id} />
      <Controller id={props.id} />
    </CardSection>
  );
};
