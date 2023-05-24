import { useDialog } from "@sun-river/components";
import { FormEvent, useCallback } from "react";
import { OptionalModalController } from "~/components/Modal";
import { useForm } from "~/hooks";
import { useCreateUser } from "~/state/server/account/mutations";
import { getErrorCode } from "~/utils/getErrorCode";

export const useJoinForm = ({ setIsOpen }: OptionalModalController) => {
  const { alert } = useDialog();

  const [joinFormData, joinFormController, isJoinFormValid] = useForm({
    email: "",
    password: ""
  });

  const createUser = useCreateUser({
    onSuccess: () => {
      alert({ message: "회원가입에 성공하였습니다!" });

      setIsOpen?.off();
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
