import { User } from "firebase/auth";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { observeLoginState } from "~/state/server/account";

const AccountContext = createContext<{
  user: User | null;
  isLogin: boolean;
} | null>(null);

export const AccountProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  const isLogin = useMemo(() => !!user, [user]);

  useEffect(() => {
    observeLoginState(setUser);
  }, []);

  const values = useMemo(
    () => ({
      user,
      isLogin
    }),
    [isLogin, user]
  );

  return (
    <AccountContext.Provider value={values}>{children}</AccountContext.Provider>
  );
};

export const useAccount = () => {
  const accountContext = useContext(AccountContext);

  if (!accountContext) {
    throw Error("useAccount is only available within AccountProvider.");
  }

  return accountContext;
};
