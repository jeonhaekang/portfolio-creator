import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  Typography,
  position,
  setTypography,
  theme
} from "@sun-river/components";
import { hexToRgba } from "~/utils";
import { AdjustInputProps } from "./AdjustInput.types";

const inputStyle = ({
  fontSize = "paragraph1",
  width
}: AdjustInputProps & { width: number }) => {
  const { colors } = theme;

  return css`
    width: ${width}px;
    box-sizing: content-box;

    background-color: transparent;

    border: 1px dashed ${hexToRgba(colors.white, 0.6)};

    ${setTypography(fontSize)}
    color: ${colors.white};
  `;
};

export const Input = styled.input<AdjustInputProps & { width: number }>`
  ${inputStyle}
`;

export const InputMirror = styled(Typography)`
  ${position.absolute({ left: -9999 })}
  visibility: hidden;
`;
