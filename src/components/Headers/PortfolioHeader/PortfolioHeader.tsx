import { Typography } from "@sun-river/components";
import { PortfolioForm } from "~/pages/create/Create.types";
import * as Styled from "../Header.styles";

export const PortfolioHeader = ({ title }: PortfolioForm["header"]) => {
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
