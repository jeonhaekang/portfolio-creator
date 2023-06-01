import { FlexColumn } from "@sun-river/components";
import { PropsWithChildren } from "react";
import { Section, SectionProps } from "~/components";
import { DESC_SECTION_DEFAULT } from "./DescSection.constants";

export const DescSection = ({
  color = DESC_SECTION_DEFAULT.color,
  children
}: PropsWithChildren<SectionProps>) => {
  return (
    <Section color={color}>
      <FlexColumn gap={24}>{children}</FlexColumn>
    </Section>
  );
};
