import { useBoolean } from "~/hooks";

export interface ModalController {
  isOpen: boolean;
  controller: ReturnType<typeof useBoolean>[1];
}

export type OptionalModalController = Partial<ModalController>;

export interface ModalProps extends ModalController {
  width?: number;
}
