import { useCallback } from "react";
import { JOIN_FORM_MODAL } from "~/components/Modal/JoinModal";
import { LOGIN_FORM_MODAL } from "~/components/Modal/LoginModal";
import { useAccount } from "~/layouts";
import { useModal } from "~/state/client/modal";
import { useLogoutUser } from "~/state/server/account/mutations";

export const useMainHeader = () => {
  const { loginModal, joinModal } = useModal(state => ({
    loginModal: state.modals[LOGIN_FORM_MODAL],
    joinModal: state.modals[JOIN_FORM_MODAL]
  }));

  const { user, isLogin } = useAccount();

  const logoutUser = useLogoutUser();

  const requestLogoutUser = useCallback(() => {
    logoutUser.mutate();
  }, [logoutUser]);

  return {
    loginModal,
    joinModal,
    requestLogoutUser,
    user,
    isLogin
  };
};
