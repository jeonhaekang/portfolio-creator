import { AdjustInput } from "~/components/AdjustInput";
import { useCreateContext } from "~/pages/create/index.page";
import * as Styled from "../Header.styles";

export const CreateHeader = () => {
  const app = useCreateContext();

  return (
    <Styled.Container>
      <Styled.Contents>
        <AdjustInput fontSize="heading3" value="벤자민 버튼" />
      </Styled.Contents>
    </Styled.Container>
  );
};
