import { Button, Input, LabelBox } from "@sun-river/components";
import { OptionalModalController } from "~/components/Modal";
import { useLoginForm } from "./LoginForm.hooks";
import * as Styled from "./LoginForm.styles";

export const LoginForm = (props: OptionalModalController) => {
  const app = useLoginForm(props);

  return (
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
  );
};
