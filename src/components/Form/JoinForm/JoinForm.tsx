import { Button, Input, LabelBox, Typography } from "@sun-river/components";
import * as Styled from "./JoinForm.styles";

export const JoinForm = () => {
  return (
    <Styled.JoinForm>
      <LabelBox label="아이디" desc="아이디를 입력해 주세요." required>
        <Input />
      </LabelBox>

      <LabelBox label="비밀번호" desc="비밀번호를 입력해 주세요." required>
        <Input type="password" />
      </LabelBox>

      <Typography color="gray4">
        아이디와 비밀번호를 찾을 수 없으니 분실하지 않도록 조심해 주세요.
      </Typography>

      <Button>회원가입</Button>
    </Styled.JoinForm>
  );
};
