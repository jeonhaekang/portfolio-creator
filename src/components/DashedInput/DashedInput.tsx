import { InputHTMLAttributes, forwardRef } from "react";
import { useDashedInput } from "./DashedInput.hooks";
import * as Styled from "./DashedInput.styles";
import { DashedInputProps } from "./DashedInput.types";

export const DashedInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & DashedInputProps
>((props, ref) => {
  const app = useDashedInput(props);

  return (
    <>
      <Styled.Input
        {...props}
        ref={ref}
        width={app.width}
        onChange={app.onChangeHandler}
      />

      <Styled.InputMirror ref={app.mirrorRef} size={props.fontSize} aria-hidden>
        {app.mirrorValue}
      </Styled.InputMirror>
    </>
  );
});
