import { Typography } from "@sun-river/components";
import { Portfolio } from "~/types/Portfolio";
import * as Styled from "../Header.styles";

export const PortfolioHeader = ({ title }: Portfolio["header"]) => {
  return (
    <Styled.Container>
      <Styled.Contents>
        <Typography as="h1" size="heading3" color="white">
          {title}
        </Typography>
      </Styled.Contents>
    </Styled.Container>
  );
};
