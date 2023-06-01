import { FlexColumn, Typography } from "@sun-river/components";
import { DescTemplate } from "../DescTemplate.types";
import { DescSection } from "../Shared";

export const DescViewer = ({
  color,
  data: { title, description }
}: DescTemplate) => {
  return (
    <DescSection color={color}>
      <FlexColumn>
        <Typography as="h2" size="heading1" color="white">
          {title}
        </Typography>

        <Typography
          as="p"
          size="paragraph2"
          color="white"
          whiteSpace="pre-wrap"
        >
          {description}
        </Typography>
      </FlexColumn>
    </DescSection>
  );
};
