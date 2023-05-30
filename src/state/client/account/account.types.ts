import { User } from "firebase/auth";

type UserType = "member" | "guest" | "none";

export interface InitialState {
  user: {
    type: UserType;
    data: User | null;
  };
}

export interface AccountState extends InitialState {
  setUser: (user: InitialState["user"]) => void;
}
