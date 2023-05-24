export interface InitialState {
  isLogin: boolean;
}

export interface AccountState extends InitialState {
  setState: (state: boolean) => void;
}
