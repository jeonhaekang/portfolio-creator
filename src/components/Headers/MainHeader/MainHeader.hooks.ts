import { useCallback, useMemo } from "react";
import { useBoolean } from "~/hooks";
import { useAccount } from "~/state/client/account";
import { useLogoutUser } from "~/state/server/account/mutations";

export const useMainHeader = () => {
  const isLogin = useAccount(state => state.isLogin);

  const [isLoginFormOpen, loginFormController] = useBoolean();
  const [isJoinFormOpen, joinFormController] = useBoolean();

  const logoutUser = useLogoutUser();

  const loginForm = useMemo(
    () => ({
      isOpen: isLoginFormOpen,
      controller: loginFormController
    }),
    [isLoginFormOpen, loginFormController]
  );

  const joinForm = useMemo(
    () => ({
      isOpen: isJoinFormOpen,
      controller: joinFormController
    }),
    [isJoinFormOpen, joinFormController]
  );

  const requestLogoutUser = useCallback(() => {
    logoutUser.mutate();
  }, [logoutUser]);

  return {
    loginForm,
    joinForm,
    isLogin,
    requestLogoutUser
  };
};
