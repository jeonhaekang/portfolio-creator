import { useBodyScrollLock, useKeyPressEvent } from "@sun-river/components";
import { PropsWithElement } from "@sun-river/components/dist/utils";
import { cloneElement, useRef } from "react";
import { createPortal } from "react-dom";
import * as Styled from "./Modal.styles";
import { ModalProps } from "./Modal.types";

export const Modal = ({
  isOpen,
  setIsOpen,
  width = 500,
  children
}: PropsWithElement<ModalProps>) => {
  const innerRef = useRef<HTMLDivElement>(null);

  useKeyPressEvent("Escape", () => setIsOpen.off());

  useBodyScrollLock(isOpen);

  if (!isOpen) return null;

  return createPortal(
    <Styled.Overlay>
      <Styled.Background onClick={setIsOpen.off} />

      <Styled.Content ref={innerRef} width={width}>
        {cloneElement(children, { isOpen, setIsOpen })}
      </Styled.Content>
    </Styled.Overlay>,
    document.getElementById("portal-root") as HTMLDivElement
  );
};
