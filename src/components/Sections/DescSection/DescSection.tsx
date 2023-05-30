import { FlexColumn, Typography } from "@sun-river/components";
import { Section } from "../Section.styles";
import * as Styled from "./DescSection.styles";
import { DescSectionProps } from "./DescSection.types";

export const DescSection = ({
  title,
  description,
  bgColor
}: DescSectionProps) => {
  return (
    <Section color={bgColor}>
      <FlexColumn gap={24}>
        <Typography size="heading1" color="white">
          {title}
        </Typography>

        <Styled.PreTypography size="paragraph2" color="white">
          {description}
        </Styled.PreTypography>
      </FlexColumn>
    </Section>
  );
};