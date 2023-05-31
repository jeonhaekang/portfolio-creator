import { FlexColumn, Masonry } from "@sun-river/components";
import {
  AdjustInput,
  AdjustTextarea,
  BgColorPicker,
  Card,
  Controller,
  Section
} from "~/components";
import { AddCard } from "./AddCard";
import { CARD_TEMPLATE_DEFAULT } from "./CardTemplate.constants";
import { useCardTemplate } from "./CardTemplate.hooks";
import { CardTemplateProps } from "./CardTemplate.types";

export const CardTemplate = ({
  bgColor = CARD_TEMPLATE_DEFAULT.bgColor,
  ...props
}: CardTemplateProps) => {
  const { cardFrom, ...app } = useCardTemplate(props);

  return (
    <Section color={bgColor}>
      <FlexColumn gap={24}>
        <AdjustInput
          fontSize="heading1"
          {...cardFrom.controller.register("title")}
        />
        <AdjustTextarea
          fontSize="paragraph2"
          {...cardFrom.controller.register("description")}
        />

        <Masonry column={3}>
          {...app.cards.map((item, idx) => {
            return <Card key={`card_${idx}`} {...item} />;
          })}

          <AddCard onAdd={app.onAddCardHandler} />
        </Masonry>
      </FlexColumn>

      <BgColorPicker id={props.id} />
      <Controller id={props.id} />
    </Section>
  );
};
