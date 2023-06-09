import { FlexCenter } from "@sun-river/components";
import { PropsWithChildren } from "react";
import { Section, SectionProps } from "~/components";
import { MAIN_SECTION_DEFAULT } from "./MainSection.constants";

export const MainSection = ({
  color = MAIN_SECTION_DEFAULT.color,
  children
}: PropsWithChildren<SectionProps>) => {
  return (
    <Section full center color={color}>
      <FlexCenter direction="column" gap={24}>
        {children}
      </FlexCenter>
    </Section>
  );
};
