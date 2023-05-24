import { create } from "zustand";
import { AccountState, InitialState } from "./account.types";

const initialState: InitialState = {
  isLogin: false
};

export const useAccount = create<AccountState>(set => ({
  ...initialState,
  setState: state => set({ isLogin: state })
}));
