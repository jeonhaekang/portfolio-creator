import { AdjustInput } from "~/components/Form/AdjustInput";
import * as Styled from "../Header.styles";
import { useCreateHeader } from "./CreateHeader.hooks";

export const CreateHeader = () => {
  const { headerForm, requestCreatePortfolio } = useCreateHeader();

  return (
    <Styled.Container>
      <Styled.Contents>
        <AdjustInput fontSize="heading3" {...headerForm.register("title")} />

        <Styled.Menus>
          <Styled.MenuButton onClick={requestCreatePortfolio}>
            Create
          </Styled.MenuButton>
        </Styled.Menus>
      </Styled.Contents>
    </Styled.Container>
  );
};
