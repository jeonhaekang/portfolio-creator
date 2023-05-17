import { Button, Input, LabelBox } from "@sun-river/components";
import * as Styled from "./LoginForm.styles";

export const LoginForm = () => {
  return (
    <Styled.LoginForm>
      <LabelBox label="아이디" required>
        <Input />
      </LabelBox>

      <LabelBox label="비밀번호" required>
        <Input type="password" />
      </LabelBox>

      <Button>로그인</Button>
    </Styled.LoginForm>
  );
};
