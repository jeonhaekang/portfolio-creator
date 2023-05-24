type UserState = "member" | "guest" | "none";

export interface InitialState {
  user: UserState;
}

export interface AccountState extends InitialState {
  setState: (state: UserState) => void;
}
