import { useCallback, useMemo } from "react";
import { JOIN_FORM_MODAL } from "~/components/Form/JoinForm";
import { LOGIN_FORM_MODAL } from "~/components/Form/LoginForm";
import { useAccount } from "~/state/client/account";
import { useModal } from "~/state/client/modal";
import { useLogoutUser } from "~/state/server/account/mutations";

export const useMainHeader = () => {
  const { loginModal, joinModal } = useModal(state => ({
    loginModal: state.modals[LOGIN_FORM_MODAL],
    joinModal: state.modals[JOIN_FORM_MODAL]
  }));

  const isLogin = useAccount(state => state.isLogin);

  const logoutUser = useLogoutUser();

  const requestLogoutUser = useCallback(() => {
    logoutUser.mutate();
  }, [logoutUser]);

  const userMenusAttributes = useMemo(
    () => [
      {
        children: "Create",
        onClick: () => {
          console.log("create");
        }
      },
      { children: "Logout", onClick: requestLogoutUser }
    ],
    [requestLogoutUser]
  );

  const guestMenusAttributes = useMemo(
    () => [
      { children: "Login", onClick: loginModal?.controller.on },
      { children: "Join", onClick: joinModal?.controller.on }
    ],
    [joinModal, loginModal]
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
