import { useDialog } from "@sun-river/components";
import { FormEvent, useCallback } from "react";
import { useForm } from "~/hooks";
import { useLoginUser } from "~/state/server/account/mutations";
import { getErrorCode } from "~/utils/getErrorCode";

export const useLoginForm = () => {
  const { alert } = useDialog();

  const [loginFormData, loginFormController, isLoginFormValid] = useForm({
    email: "",
    password: ""
  });

  const loginUser = useLoginUser({
    onSuccess: () => {
      alert({ message: "로그인에 성공하였습니다!" });
    },
    onError: error => {
      alert({ message: getErrorCode(error.code) });
    }
  });

  const requestLogin = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      loginUser.mutate(loginFormData);
    },
    [loginFormData, loginUser]
  );

  return {
    loginFormData,
    loginFormController,
    isLoginFormValid,
    requestLogin
  };
};
