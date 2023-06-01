import {
  FlexColumn,
  Masonry,
  Typography,
  useBreakPoint
} from "@sun-river/components";
import { CARD_TEMPLATE_DEFAULT, Card } from "~/components";
import { Section } from "../Section.contexts";
import { CardSectionProps } from "./CardSection.types";

export const CardSection = ({
  bgColor = CARD_TEMPLATE_DEFAULT.bgColor,
  title,
  description,
  cards
}: CardSectionProps) => {
  const count = useBreakPoint({ 1: 600, 2: 1000, 3: 1400, 4: 1800 }, 3);

  return (
    <Section color={bgColor}>
      <FlexColumn gap={24}>
        <Typography as="h2" size="heading1" color="white">
          {title}
        </Typography>

        <Typography as="p" size="paragraph2" color="white">
          {description}
        </Typography>

        <Masonry column={count} gap={24}>
          {...cards.map((card, idx) => <Card key={`card_${idx}`} {...card} />)}
        </Masonry>
      </FlexColumn>
    </Section>
  );
};
