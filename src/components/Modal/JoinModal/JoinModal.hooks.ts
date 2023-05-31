import { useDialog, useDialogContext } from "@sun-river/components";
import { FormEvent, useCallback } from "react";
import { useForm } from "~/hooks";
import { useCreateUser } from "~/state/server/account/mutations";
import { getErrorCode } from "~/utils/getErrorCode";
import { JOIN_FORM_MODAL } from "./JoinModal.constants";

export const useJoinForm = () => {
  const { alert } = useDialog();
  const { hideDialog } = useDialogContext();

  const joinForm = useForm({
    email: "",
    password: ""
  });

  const createUser = useCreateUser({
    onSuccess: () => {
      alert({ message: "회원가입에 성공하였습니다!" });

      hideDialog(JOIN_FORM_MODAL);
    },
    onError: error => {
      alert({ message: getErrorCode(error.code) });
    }
  });

  const requestCreateUser = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      createUser.mutate(joinForm.data);
    },
    [createUser, joinForm.data]
  );

  return {
    requestCreateUser,
    joinForm
  };
};
