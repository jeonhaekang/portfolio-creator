import { useDialog } from "@sun-river/components";
import { FormEvent, useCallback } from "react";
import { useForm } from "~/hooks";
import { useModal } from "~/state/client/modal";
import { useCreateUser } from "~/state/server/account/mutations";
import { getErrorCode } from "~/utils/getErrorCode";
import { JOIN_FORM_MODAL } from "./JoinForm.constants";

export const useJoinForm = () => {
  const { alert } = useDialog();

  const joinModal = useModal(state => state.modals[JOIN_FORM_MODAL]);

  const [joinFormData, joinFormController, isJoinFormValid] = useForm({
    email: "",
    password: ""
  });

  const createUser = useCreateUser({
    onSuccess: () => {
      alert({ message: "회원가입에 성공하였습니다!" });

      joinModal.controller.off();
    },
    onError: error => {
      alert({ message: getErrorCode(error.code) });
    }
  });

  const requestCreateUser = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      createUser.mutate(joinFormData);
    },
    [createUser, joinFormData]
  );

  return {
    requestCreateUser,
    joinFormController,
    isJoinFormValid
  };
};
