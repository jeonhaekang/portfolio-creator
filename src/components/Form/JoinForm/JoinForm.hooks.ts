import { useDialog } from "@sun-river/components";
import { FormEvent, useCallback } from "react";
import { useForm } from "~/hooks";
import { useCreateUser } from "~/state/server/account/mutations";
import { getErrorCode } from "~/utils/getErrorCode";

export const useJoinForm = () => {
  const { alert } = useDialog();

  const [joinFormData, joinFormController, isJoinFormValid] = useForm({
    email: "",
    password: ""
  });

  const createUser = useCreateUser({
    onSuccess: () => {
      alert({ message: "회원가입에 성공하였습니다!" });
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
