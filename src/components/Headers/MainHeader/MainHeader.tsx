import { JOIN_FORM_MODAL, JoinForm } from "~/components/Form/JoinForm";
import { LOGIN_FORM_MODAL, LoginForm } from "~/components/Form/LoginForm";
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
          {app.user === "member" && (
            <Styled.MenuButton onClick={app.requestLogoutUser}>
              Logout
            </Styled.MenuButton>
          )}

          {app.user === "guest" && (
            <>
              <Styled.MenuButton onClick={app.loginModal.controller.on}>
                Login
              </Styled.MenuButton>
              <Styled.MenuButton onClick={app.joinModal.controller.on}>
                Join
              </Styled.MenuButton>
            </>
          )}
        </Styled.Menus>
      </Styled.Contents>

      <Modal name={LOGIN_FORM_MODAL}>
        <LoginForm />
      </Modal>

      <Modal name={LOGIN_FORM_MODAL}>
        <LoginForm />
      </Modal>

      <Modal name={JOIN_FORM_MODAL}>
        <JoinForm />
      </Modal>
    </Styled.Container>
  );
};
