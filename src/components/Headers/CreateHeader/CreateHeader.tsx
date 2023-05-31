import { AdjustInput } from "~/components/AdjustInput";
import * as Styled from "../Header.styles";
import { useCreateHeader } from "./CreateHeader.hooks";

export const CreateHeader = () => {
  const app = useCreateHeader();

  return (
    <Styled.Container>
      <Styled.Contents>
        <AdjustInput
          fontSize="heading3"
          {...app.headerForm.controller.register("title")}
        />
      </Styled.Contents>
    </Styled.Container>
  );
};
