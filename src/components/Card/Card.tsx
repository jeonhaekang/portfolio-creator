import { Typography } from "@sun-river/components";
import Image from "next/image";
import { useMemo } from "react";
import { CardForm } from "../Templates/CardTemplate/AddCard";
import * as Styled from "./Card.styles";

export const Card = ({
  image,
  title,
  subTitle,
  description,
  linkLabel,
  link
}: CardForm) => {
  const imageUrl = useMemo(
    () => (image instanceof File ? URL.createObjectURL(image) : image),
    [image]
  );

  return (
    <Styled.Container>
      <Styled.ImageBox>
        <Image
          src={imageUrl}
          fill
          alt="카드 이미지"
          style={{ objectFit: "cover" }}
        />

        <Styled.ImageTitle>
          <Typography as="h3" size="heading4" color="white">
            {title}
          </Typography>
        </Styled.ImageTitle>
      </Styled.ImageBox>

      <Styled.TextBox>
        <Typography as="p" size="paragraph3" color="gray3">
          {subTitle}
        </Typography>

        <Typography as="p">{description}</Typography>

        <Styled.HighlightLink href={link} target="_blank">
          {linkLabel}
        </Styled.HighlightLink>
      </Styled.TextBox>
    </Styled.Container>
  );
};
