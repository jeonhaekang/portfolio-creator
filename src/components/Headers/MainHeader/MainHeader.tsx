import { JoinForm } from "~/components/Form/JoinForm";
import { LoginForm } from "~/components/Form/LoginForm";
import { Modal } from "~/components/Modal/Modal";
import { useMainHeader } from "./MainHeader.hooks";
import * as Styled from "./MainHeader.styles";

export const MainHeader = () => {
  const app = useMainHeader();

  return (
    <Styled.Container>
      <Styled.Contents>
        <Styled.Title>PortfolioCreator</Styled.Title>

        <Styled.Menus>
          {app.menusAttributes.map(attribute => (
            <Styled.MenuButton key={attribute.children} {...attribute} />
          ))}
        </Styled.Menus>
      </Styled.Contents>

      <Modal {...app.login}>
        <LoginForm />
      </Modal>

      <Modal {...app.join}>
        <JoinForm />
      </Modal>
    </Styled.Container>
  );
};
