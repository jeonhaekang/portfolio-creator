import { useDialog, useDialogContext } from "@sun-river/components";
import { FormEvent, useCallback } from "react";
import { useForm } from "~/hooks";
import { useLoginUser } from "~/state/server/account/mutations";
import { getErrorCode } from "~/utils/getErrorCode";
import { LOGIN_FORM_MODAL } from "./LoginModal.constants";

export const useLoginForm = () => {
  const { alert } = useDialog();
  const { hideDialog } = useDialogContext();

  const loginForm = useForm({
    email: "",
    password: ""
  });

  const loginUser = useLoginUser({
    onSuccess: () => hideDialog(LOGIN_FORM_MODAL),
    onError: error => alert({ message: getErrorCode(error.code) })
  });

  const requestLogin = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      loginUser.mutate(loginForm.data);
    },
    [loginForm.data, loginUser]
  );

  return {
    requestLogin,
    loginForm
  };
};
