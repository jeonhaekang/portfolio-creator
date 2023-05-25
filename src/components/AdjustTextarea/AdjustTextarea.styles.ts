import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Typography,
  position,
  setSize,
  setTypography,
  theme
} from "@sun-river/components";
import { hexToRgba } from "~/utils";
import { AdjustTextareaStyleProps } from "./AdjustTextArea.types";

const textareaStyle = ({
  fontSize = "paragraph1",
  width,
  height
}: AdjustTextareaStyleProps) => {
  const { colors } = theme;

  return css`
    background-color: transparent;

    ${setSize(width, height)}
    box-sizing: content-box;
    resize: none;

    border: 1px dashed ${hexToRgba(colors.white, 0.6)};
    outline: none;

    ${setTypography(fontSize)}
    color: ${colors.white};
    white-space: nowrap;

    &::-webkit-scrollbar {
      display: none;
    }
  `;
};

export const Textarea = styled.textarea<AdjustTextareaStyleProps>`
  ${textareaStyle}
`;

export const TextareaMirror = styled(Typography)`
  ${position.absolute({ left: -9999 })}
  visibility: hidden;

  white-space: pre;
`;
