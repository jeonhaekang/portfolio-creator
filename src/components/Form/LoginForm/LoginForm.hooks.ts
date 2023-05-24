import { useDialog } from "@sun-river/components";
import { FormEvent, useCallback } from "react";
import { OptionalModalController } from "~/components/Modal";
import { useForm } from "~/hooks";
import { useLoginUser } from "~/state/server/account/mutations";
import { getErrorCode } from "~/utils/getErrorCode";

export const useLoginForm = ({ setIsOpen }: OptionalModalController) => {
  const { alert } = useDialog();

  const [loginFormData, loginFormController, isLoginFormValid] = useForm({
    email: "",
    password: ""
  });

  const loginUser = useLoginUser({
    onSuccess: () => {
      setIsOpen?.off();
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
