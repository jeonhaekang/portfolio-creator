import { FlexCenter, Typography } from "@sun-river/components";
import Image from "next/image";
import { Section } from "../Section.contexts";
import * as Styled from "./MainSection.styles";
import { MainSectionProps } from "./MainSection.types";

export const MainSection = ({
  bgColor,
  image,
  title,
  description
}: MainSectionProps) => {
  return (
    <Section full center color={bgColor}>
      <FlexCenter direction="column" gap={12}>
        <Styled.ImageBox>
          <Image src={image} fill style={{ objectFit: "cover" }} alt="로고" />
        </Styled.ImageBox>

        <Typography size="heading1" color="white">
          {title}
        </Typography>

        <Typography color="white">{description}</Typography>
      </FlexCenter>
    </Section>
  );
};
