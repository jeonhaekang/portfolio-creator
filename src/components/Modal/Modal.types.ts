import { useBoolean } from "~/hooks";

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: ReturnType<typeof useBoolean>[1];
  width?: number;
}
