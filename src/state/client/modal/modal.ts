import { create } from "zustand";
import { InitialState, ModalState } from "./modal.types";

const initialState: InitialState = {
  modals: {}
};

export const useModal = create<ModalState>(set => ({
  ...initialState,
  register: (name, modal) => {
    set(state => ({ modals: { ...state.modals, [name]: modal } }));
  }
}));
