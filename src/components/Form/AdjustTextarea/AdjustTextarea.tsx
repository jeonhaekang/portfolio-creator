import { TextareaHTMLAttributes, forwardRef } from "react";
import { AdjustTextareaProps } from "./AdjustTextArea.types";
import { useAdjustTextarea } from "./AdjustTextarea.hooks";
import * as Styled from "./AdjustTextarea.styles";

export const AdjustTextarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement> & AdjustTextareaProps
>((props, ref) => {
  const app = useAdjustTextarea(props);

  return (
    <>
      <Styled.Textarea ref={ref} {...props} {...app.size} />

      <Styled.TextareaMirror
        ref={app.mirrorRef}
        size={props.fontSize}
        aria-hidden
      >
        {app.mirrorValue}
      </Styled.TextareaMirror>
    </>
  );
});
