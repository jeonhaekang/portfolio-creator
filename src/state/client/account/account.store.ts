import { create } from "zustand";
import { AccountState, InitialState } from "./account.types";

const initialState: InitialState = {
  user: {
    type: "none",
    data: null
  }
};

export const useAccount = create<AccountState>(set => ({
  ...initialState,
  setUser: user => set({ user })
}));
