import { create } from "zustand";
import { AccountState, InitialState } from "./account.types";

const initialState: InitialState = {
  user: "none"
};

export const useAccount = create<AccountState>(set => ({
  ...initialState,
  setState: user => set({ user })
}));
