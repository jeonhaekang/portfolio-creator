import { FlexColumn, Masonry, Typography } from "@sun-river/components";
import { CARD_TEMPLATE_DEFAULT, Card } from "~/components";
import { Section } from "../Section.contexts";
import { CardSectionProps } from "./CardSection.types";

export const CardSection = ({
  bgColor = CARD_TEMPLATE_DEFAULT.bgColor,
  title,
  description,
  cards
}: CardSectionProps) => {
  return (
    <Section color={bgColor}>
      <FlexColumn gap={24}>
        <Typography as="h2" size="heading1" color="white">
          {title}
        </Typography>

        <Typography as="p" size="paragraph2" color="white">
          {description}
        </Typography>

        <Masonry column={3}>
          {...cards.map((card, idx) => <Card key={`card_${idx}`} {...card} />)}
        </Masonry>
      </FlexColumn>
    </Section>
  );
};
