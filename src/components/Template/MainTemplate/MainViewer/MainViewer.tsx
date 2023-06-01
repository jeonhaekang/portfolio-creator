import { Typography } from "@sun-river/components";
import Image from "next/image";
import { MainSectionDTO } from "~/types/Portfolio";
import { MainSection } from "../Shared";
import * as Styled from "./MainViewer.styles";

export const MainViewer = ({
  color,
  data: { image, title, description }
}: MainSectionDTO) => {
  return (
    <MainSection color={color}>
      <Styled.ImageBox>
        <Image src={image} fill style={{ objectFit: "cover" }} alt="로고" />
      </Styled.ImageBox>

      <Typography as="h2" size="heading1" color="white">
        {title}
      </Typography>

      <Typography as="p" color="white">
        {description}
      </Typography>
    </MainSection>
  );
};
