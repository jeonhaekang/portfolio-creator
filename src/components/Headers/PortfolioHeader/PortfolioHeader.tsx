import { Portfolio } from "~/types/Portfolio";
import * as Styled from "../Header.styles";

export const PortfolioHeader = ({ title }: Portfolio["header"]) => {
  return (
    <Styled.Container>
      <Styled.Contents>
        <Styled.Title>{title}</Styled.Title>
      </Styled.Contents>
    </Styled.Container>
  );
};
