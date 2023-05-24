import { useCallback, useMemo } from "react";
import { useBoolean } from "~/hooks";
import { useAccount } from "~/state/client/account";
import { useLogoutUser } from "~/state/server/account/mutations";

export const useMainHeader = () => {
  const isLogin = useAccount(state => state.isLogin);

  const [isLoginFormOpen, loginController] = useBoolean();
  const [isJoinFormOpen, joinController] = useBoolean();

  const logoutUser = useLogoutUser();

  const loginModal = useMemo(
    () => ({
      isOpen: isLoginFormOpen,
      controller: loginController
    }),
    [isLoginFormOpen, loginController]
  );

  const joinModal = useMemo(
    () => ({
      isOpen: isJoinFormOpen,
      controller: joinController
    }),
    [isJoinFormOpen, joinController]
  );

  const requestLogoutUser = useCallback(() => {
    logoutUser.mutate();
  }, [logoutUser]);

  const userMenusAttributes = useMemo(
    () => [{ children: "Logout", onClick: requestLogoutUser }],
    [requestLogoutUser]
  );

  const guestMenusAttributes = useMemo(
    () => [
      { children: "Login", onClick: loginModal.controller.on },
      { children: "Join", onClick: joinModal.controller.on }
    ],
    [joinModal.controller.on, loginModal.controller.on]
  );

  const menusAttributes = useMemo(
    () => (isLogin ? userMenusAttributes : guestMenusAttributes),
    [guestMenusAttributes, isLogin, userMenusAttributes]
  );

  return {
    menusAttributes,
    loginModal,
    joinModal,
    isLogin,
    requestLogoutUser
  };
};
