import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Typography,
  position,
  setSize,
  setTypography,
  theme
} from "@sun-river/components";
import { Size } from "~/types/Common";
import { hexToRgba } from "~/utils";
import { AdjustTextareaProps } from "./AdjustTextArea.types";

const textareaStyle = ({
  fontSize = "paragraph1",
  width,
  height,
  align = "left"
}: AdjustTextareaProps & Size) => {
  const { colors } = theme;

  return css`
    background-color: transparent;

    ${setSize({ width, height, maxWidth: "100%" })}
    box-sizing: content-box;
    resize: none;

    border: 1px dashed ${hexToRgba(colors.white, 0.6)};
    outline: none;

    ${setTypography(fontSize)}
    text-align: ${align};
    color: ${colors.white};
    white-space: nowrap;

    &::-webkit-scrollbar {
      display: none;
    }
  `;
};

export const Textarea = styled.textarea<AdjustTextareaProps & Size>`
  ${textareaStyle}
`;

export const TextareaMirror = styled(Typography)`
  ${position.absolute({ left: -9999 })}
  visibility: hidden;

  white-space: pre;
`;
