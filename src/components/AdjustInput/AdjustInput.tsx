import { InputHTMLAttributes, forwardRef } from "react";
import { useAdjustInput } from "./AdjustInput.hooks";
import * as Styled from "./AdjustInput.styles";
import { AdjustInputProps } from "./AdjustInput.types";

export const AdjustInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & AdjustInputProps
>((props, ref) => {
  const app = useAdjustInput(props);

  return (
    <>
      <Styled.Input ref={ref} {...props} {...app.size} />

      <Styled.InputMirror ref={app.mirrorRef} size={props.fontSize} aria-hidden>
        {app.mirrorValue}
      </Styled.InputMirror>
    </>
  );
});
