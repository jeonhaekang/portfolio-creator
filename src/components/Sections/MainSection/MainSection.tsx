import { FlexCenter, Typography } from "@sun-river/components";
import { Section } from "../Section.contexts";
import { MainSectionProps } from "./MainSection.types";

export const MainSection = ({
  image,
  title,
  description
}: MainSectionProps) => {
  return (
    <Section full center>
      <FlexCenter direction="column" gap={12}>
        <Typography size="heading1" color="white">
          {title}
        </Typography>

        <Typography color="white">{description}</Typography>
      </FlexCenter>
    </Section>
  );
};
