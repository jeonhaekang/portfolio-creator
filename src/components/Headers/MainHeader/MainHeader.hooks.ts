import { useCallback, useMemo } from "react";
import { useBoolean } from "~/hooks";
import { useAccount } from "~/state/client/account";
import { useLogoutUser } from "~/state/server/account/mutations";

export const useMainHeader = () => {
  const isLogin = useAccount(state => state.isLogin);

  const [isLoginFormOpen, loginController] = useBoolean();
  const [isJoinFormOpen, joinController] = useBoolean();

  const logoutUser = useLogoutUser();

  const login = useMemo(
    () => ({
      isOpen: isLoginFormOpen,
      controller: loginController
    }),
    [isLoginFormOpen, loginController]
  );

  const join = useMemo(
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
      { children: "Login", onClick: login.controller.on },
      { children: "Join", onClick: join.controller.on }
    ],
    [join.controller.on, login.controller.on]
  );

  const menusAttributes = useMemo(
    () => (isLogin ? userMenusAttributes : guestMenusAttributes),
    [guestMenusAttributes, isLogin, userMenusAttributes]
  );

  return {
    menusAttributes,
    login,
    join,
    isLogin,
    requestLogoutUser
  };
};
