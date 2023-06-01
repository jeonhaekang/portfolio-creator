import { FlexColumn } from "@sun-river/components";
import { PropsWithChildren } from "react";
import { Section, SectionProps } from "~/components";

export const DescSection = ({
  color,
  children
}: PropsWithChildren<SectionProps>) => {
  return (
    <Section color={color}>
      <FlexColumn gap={24}>{children}</FlexColumn>
    </Section>
  );
};
