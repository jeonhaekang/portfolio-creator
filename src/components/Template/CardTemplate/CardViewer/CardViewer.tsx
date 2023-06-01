import { Typography } from "@sun-river/components";
import { CardTemplate } from "../CardTemplate.types";
import { Card, CardSection, ResponsiveMasonry } from "../Shared";

export const CardViewer = ({
  color,
  data: { title, description, cards }
}: Omit<CardTemplate, "type">) => {
  return (
    <CardSection color={color}>
      <Typography as="h2" size="heading1" color="white">
        {title}
      </Typography>

      <Typography as="p" size="paragraph2" color="white" whiteSpace="pre-wrap">
        {description}
      </Typography>

      <ResponsiveMasonry>
        {cards.map((card, idx) => (
          <Card key={`card_${idx}`} {...card} />
        ))}
      </ResponsiveMasonry>
    </CardSection>
  );
};
