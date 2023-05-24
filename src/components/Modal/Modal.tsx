import { useBodyScrollLock, useKeyPressEvent } from "@sun-river/components";
import { PropsWithElement } from "@sun-river/components/dist/utils";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useBoolean } from "~/hooks";
import { useModal } from "~/state/client/modal";
import * as Styled from "./Modal.styles";
import { ModalProps } from "./Modal.types";

export const Modal = ({
  name,
  width = 500,
  children
}: PropsWithElement<ModalProps>) => {
  const register = useModal(state => state.register);

  const [isOpen, controller] = useBoolean();

  const innerRef = useRef<HTMLDivElement>(null);

  useKeyPressEvent("Escape", () => controller.off());

  useBodyScrollLock(isOpen);

  useEffect(() => {
    register(name, { isOpen, controller });
  }, [controller, isOpen, name, register]);

  if (!isOpen) return null;

  return createPortal(
    <Styled.Overlay>
      <Styled.Background onClick={controller.off} />

      <Styled.Content ref={innerRef} width={width}>
        {children}
      </Styled.Content>
    </Styled.Overlay>,
    document.getElementById("portal-root") as HTMLDivElement
  );
};
