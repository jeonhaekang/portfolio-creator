import { JoinForm } from "~/components/Form/JoinForm";
import { LoginForm } from "~/components/Form/LoginForm";
import { Modal } from "~/components/Modal/Modal";
import { useBoolean } from "~/hooks";
import * as Styled from "./MainHeader.styles";

export const MainHeader = () => {
  const [isLoginFormOpen, loginFormController] = useBoolean();
  const [isJoinFormOpen, joinFormController] = useBoolean();

  return (
    <Styled.Container>
      <Styled.Contents>
        <Styled.Title>PortfolioCreator</Styled.Title>

        <Styled.Menus>
          <Styled.MenuButton onClick={loginFormController.on}>
            Login
          </Styled.MenuButton>
          <Styled.MenuButton onClick={joinFormController.on}>
            Join
          </Styled.MenuButton>
        </Styled.Menus>
      </Styled.Contents>

      <Modal isOpen={isLoginFormOpen} setIsOpen={loginFormController}>
        <LoginForm />
      </Modal>

      <Modal isOpen={isJoinFormOpen} setIsOpen={joinFormController}>
        <JoinForm />
      </Modal>
    </Styled.Container>
  );
};
