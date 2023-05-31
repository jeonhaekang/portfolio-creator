import { FlexColumn } from "@sun-river/components";
import { AdjustInput } from "~/components/AdjustInput";
import { AdjustTextarea } from "~/components/AdjustTextarea";
import { ImageUpload } from "~/components/ImageUpload";
import { useAddCard } from "./AddCard.hooks";
import * as Styled from "./AddCard.styles";
import { AddCardProps } from "./AddCard.types";

export const AddCard = (props: AddCardProps) => {
  const { cardForm, ...app } = useAddCard(props);

  return (
    <Styled.Container>
      <ImageUpload height={15} />
      <AdjustInput
        required
        fontSize="heading4"
        {...cardForm.controller.register("title")}
      />
      <AdjustInput
        required
        fontSize="paragraph2"
        {...cardForm.controller.register("subTitle")}
      />
      <AdjustTextarea
        required
        fontSize="paragraph3"
        {...cardForm.controller.register("description")}
      />

      <FlexColumn gap={6}>
        <AdjustInput
          required
          fontSize="paragraph3"
          {...cardForm.controller.register("linkLabel")}
        />
        <AdjustInput
          required
          fontSize="paragraph3"
          {...cardForm.controller.register("link")}
        />
      </FlexColumn>

      <Styled.AddButton
        onClick={app.addCardHandler}
        disabled={!cardForm.isValid}
      >
        카드 추가
      </Styled.AddButton>
    </Styled.Container>
  );
};
