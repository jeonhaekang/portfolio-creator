import { FlexColumn } from "@sun-river/components";
import { AdjustInput, AdjustTextarea, ImageUpload } from "~/components";
import { useAddCardEditor } from "./AddCardEditor.hooks";
import * as Styled from "./AddCardEditor.styles";
import { AddCardEditorProps } from "./AddCardEditor.types";

export const AddCardEditor = (props: AddCardEditorProps) => {
  const { cardForm, addCardHandler } = useAddCardEditor(props);

  return (
    <Styled.Container>
      <ImageUpload required height={10} {...cardForm.register("image")} />

      <AdjustInput
        required
        fontSize="heading4"
        {...cardForm.register("title")}
      />
      <AdjustInput
        required
        fontSize="paragraph3"
        {...cardForm.register("subTitle")}
      />
      <AdjustTextarea
        required
        fontSize="paragraph2"
        {...cardForm.register("description")}
      />

      <FlexColumn gap={6}>
        <AdjustInput
          required
          fontSize="paragraph3"
          {...cardForm.register("linkLabel")}
        />
        <AdjustInput
          required
          fontSize="paragraph3"
          {...cardForm.register("link")}
        />
      </FlexColumn>

      <Styled.AddButton onClick={addCardHandler} disabled={!cardForm.isValid}>
        카드 추가
      </Styled.AddButton>
    </Styled.Container>
  );
};
