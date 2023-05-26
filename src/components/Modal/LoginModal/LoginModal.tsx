import { Button, Input, LabelBox } from "@sun-river/components";
import { Modal } from "../Modal";
import { LOGIN_FORM_MODAL } from "./LoginModal.constants";
import { useLoginForm } from "./LoginModal.hooks";
import * as Styled from "./LoginModal.styles";

export const LoginModal = () => {
  const { loginForm, ...app } = useLoginForm();

  return (
    <Modal name={LOGIN_FORM_MODAL}>
      <Styled.LoginForm onSubmit={app.requestLogin}>
        <LabelBox label="이메일" required>
          <Input type="email" {...loginForm.controller.register("email")} />
        </LabelBox>

        <LabelBox label="비밀번호" required>
          <Input
            type="password"
            {...loginForm.controller.register("password")}
          />
        </LabelBox>

        <Button disabled={!loginForm.isValid}>로그인</Button>
      </Styled.LoginForm>
    </Modal>
  );
};
