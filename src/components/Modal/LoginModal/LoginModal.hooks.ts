import { useDialog } from "@sun-river/components";
import { FormEvent, useCallback } from "react";
import { useForm } from "~/hooks";
import { useModal } from "~/state/client/modal";
import { useLoginUser } from "~/state/server/account/mutations";
import { getErrorCode } from "~/utils/getErrorCode";
import { LOGIN_FORM_MODAL } from "./LoginModal.constants";

export const useLoginForm = () => {
  const { alert } = useDialog();

  const loginModal = useModal(state => state.modals[LOGIN_FORM_MODAL]);

  const loginForm = useForm({
    email: "",
    password: ""
  });

  const loginUser = useLoginUser({
    onSuccess: () => {
      loginModal.controller.off();
    },
    onError: error => {
      alert({ message: getErrorCode(error.code) });
    }
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
