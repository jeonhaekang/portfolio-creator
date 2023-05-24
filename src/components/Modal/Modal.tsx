import {
  useBodyScrollLock,
  useClickAway,
  useKeyPressEvent
} from "@sun-river/components";
import { PropsWithChildren, useRef } from "react";
import { createPortal } from "react-dom";
import * as Styled from "./Modal.styles";
import { ModalProps } from "./Modal.types";

export const Modal = ({
  isOpen,
  setIsOpen,
  width = 500,
  children
}: PropsWithChildren<ModalProps>) => {
  const innerRef = useRef<HTMLDivElement>(null);

  useClickAway(innerRef, () => setIsOpen.off());

  useKeyPressEvent("Escape", () => setIsOpen.off());

  useBodyScrollLock(isOpen);

  if (!isOpen) return null;

  return createPortal(
    <Styled.Overlay>
      <Styled.Inner ref={innerRef} width={width}>
        {children}
      </Styled.Inner>
    </Styled.Overlay>,
    document.getElementById("portal-root") as HTMLDivElement
  );
};
