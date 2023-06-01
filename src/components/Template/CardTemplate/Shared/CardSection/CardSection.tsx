import { FlexColumn } from "@sun-river/components";
import { PropsWithChildren } from "react";
import { Section, SectionProps } from "~/components";
import { CARD_SECTION_DEFAULT } from "./CardSection.constants";

export const CardSection = ({
  color = CARD_SECTION_DEFAULT.color,
  children
}: PropsWithChildren<SectionProps>) => {
  return (
    <Section color={color}>
      <FlexColumn gap={24}>{children}</FlexColumn>
    </Section>
  );
};
