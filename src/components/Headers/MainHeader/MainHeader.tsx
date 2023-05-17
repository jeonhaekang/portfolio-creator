import * as Styled from "./MainHeader.styles";

export const MainHeader = () => {
  return (
    <Styled.Container>
      <Styled.Contents>
        <Styled.Title>PortfolioCreator</Styled.Title>

        <Styled.Menus>
          <Styled.MenuButton>Login</Styled.MenuButton>
          <Styled.MenuButton>Join</Styled.MenuButton>
        </Styled.Menus>
      </Styled.Contents>
    </Styled.Container>
  );
};
