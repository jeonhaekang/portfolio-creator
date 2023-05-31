import { useDialogContext } from "@sun-river/components";
import { useCallback } from "react";
import { useAccount } from "~/layouts";
import { useLogoutUser } from "~/state/server/account/mutations";

export const useMainHeader = () => {
  const { showDialog } = useDialogContext();
  const { user } = useAccount();

  const logoutUser = useLogoutUser();

  const requestLogoutUser = useCallback(() => {
    logoutUser.mutate();
  }, [logoutUser]);

  return {
    requestLogoutUser,
    user,
    showDialog
  };
};
