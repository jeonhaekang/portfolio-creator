import {
  useBodyScrollLock,
  useDialogContext,
  useKeyPressEvent
} from "@sun-river/components";
import { PropsWithElement } from "@sun-river/components/dist/utils";
import { useRef } from "react";
import { createPortal } from "react-dom";
import * as Styled from "./Modal.styles";
import { ModalProps } from "./Modal.types";

export const Modal = ({
  name,
  width = 500,
  children
}: PropsWithElement<ModalProps>) => {
  const { hideDialog } = useDialogContext();

  const innerRef = useRef<HTMLDivElement>(null);

  useKeyPressEvent("Escape", () => hideDialog(name));

  useBodyScrollLock(true);

  return createPortal(
    <Styled.Overlay>
      <Styled.Background onClick={() => hideDialog(name)} />

      <Styled.Content ref={innerRef} width={width}>
        {children}
      </Styled.Content>
    </Styled.Overlay>,
    document.getElementById("portal-root") as HTMLDivElement
  );
};
