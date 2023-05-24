import { useBoolean } from "~/hooks";

export interface ModalController {
  isOpen: boolean;
  controller: ReturnType<typeof useBoolean>[1];
}

export interface InitialState {
  modals: {
    [key: string]: ModalController;
  };
}

export interface ModalState extends InitialState {
  register: (name: string, modal: ModalController) => void;
}
