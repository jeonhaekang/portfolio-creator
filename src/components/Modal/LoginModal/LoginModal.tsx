import { Button, Input, LabelBox } from "@sun-river/components";
import { Modal } from "../Modal";
import { LOGIN_FORM_MODAL } from "./LoginModal.constants";
import { useLoginForm } from "./LoginModal.hooks";
import * as Styled from "./LoginModal.styles";

export const LoginModal = () => {
  const app = useLoginForm();

  return (
    <Modal name={LOGIN_FORM_MODAL}>
      <Styled.LoginForm onSubmit={app.requestLogin}>
        <LabelBox label="이메일" required>
          <Input type="email" {...app.loginFormController.register("email")} />
        </LabelBox>

        <LabelBox label="비밀번호" required>
          <Input
            type="password"
            {...app.loginFormController.register("password")}
          />
        </LabelBox>

        <Button disabled={!app.isLoginFormValid}>로그인</Button>
      </Styled.LoginForm>
    </Modal>
  );
};
