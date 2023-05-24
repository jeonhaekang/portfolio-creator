import { JoinForm } from "~/components/Form/JoinForm";
import { LoginForm } from "~/components/Form/LoginForm";
import { Modal } from "~/components/Modal/Modal";
import { useMainHeader } from "./MainHeader.hooks";
import * as Styled from "./MainHeader.styles";

export const MainHeader = () => {
  const { requestLogoutUser, loginForm, joinForm, isLogin } = useMainHeader();

  return (
    <Styled.Container>
      <Styled.Contents>
        <Styled.Title>PortfolioCreator</Styled.Title>

        <Styled.Menus>
          {isLogin ? (
            <Styled.MenuButton onClick={requestLogoutUser}>
              Logout
            </Styled.MenuButton>
          ) : (
            <>
              <Styled.MenuButton onClick={loginForm.controller.on}>
                Login
              </Styled.MenuButton>

              <Styled.MenuButton onClick={joinForm.controller.on}>
                Join
              </Styled.MenuButton>
            </>
          )}
        </Styled.Menus>
      </Styled.Contents>

      <Modal isOpen={loginForm.isOpen} setIsOpen={loginForm.controller}>
        <LoginForm />
      </Modal>

      <Modal isOpen={joinForm.isOpen} setIsOpen={joinForm.controller}>
        <JoinForm />
      </Modal>
    </Styled.Container>
  );
};
