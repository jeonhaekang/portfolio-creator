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
import { AdjustInputProps } from "./AdjustInput.types";

const inputStyle = ({
  fontSize = "paragraph1",
  height,
  width
}: AdjustInputProps & Size) => {
  const { colors } = theme;

  return css`
    ${setSize(width, height)}
    box-sizing: content-box;

    background-color: transparent;

    border: 1px dashed ${hexToRgba(colors.white, 0.6)};

    ${setTypography(fontSize)}
    color: ${colors.white};
  `;
};

export const Input = styled.input<AdjustInputProps & Size>`
  ${inputStyle}
`;

export const InputMirror = styled(Typography)`
  ${position.absolute({ left: -9999 })}
  visibility: hidden;
`;
