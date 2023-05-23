import { Button, Input, LabelBox, Typography } from "@sun-river/components";
import { useJoinForm } from "./JoinForm.hooks";
import * as Styled from "./JoinForm.styles";

export const JoinForm = () => {
  const app = useJoinForm();

  return (
    <Styled.JoinForm onSubmit={app.requestCreateUser}>
      <LabelBox label="이메일" desc="이메일을 입력해 주세요." required>
        <Input type="email" {...app.joinFormController.register("email")} />
      </LabelBox>

      <LabelBox
        label="비밀번호"
        desc="비밀번호는 최소 6자 이상 입력해 주세요."
        required
      >
        <Input
          type="password"
          minLength={6}
          {...app.joinFormController.register("password")}
        />
      </LabelBox>

      <Typography color="gray4" size="paragraph3">
        아이디와 비밀번호를 찾을 수 없으니 분실하지 않도록 조심해 주세요.
      </Typography>

      <Button disabled={!app.isJoinFormValid}>회원가입</Button>
    </Styled.JoinForm>
  );
};
