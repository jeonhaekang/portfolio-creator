import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Typography, setTypography, theme } from "@sun-river/components";
import { hexToRgba } from "~/utils";
import { DashedInputProps } from "./DashedInput.types";

const inputStyle = ({
  fontSize = "paragraph1",
  width
}: DashedInputProps & { width: number }) => {
  const { colors } = theme;

  return css`
    width: calc(${width}px + 1rem);

    background-color: transparent;

    border: 1px dashed ${hexToRgba(colors.white, 0.6)};

    ${setTypography(fontSize)}
    color: ${colors.white};
    text-align: center;
  `;
};

export const Input = styled.input<DashedInputProps & { width: number }>`
  ${inputStyle}
`;

export const InputMirror = styled(Typography)`
  visibility: hidden;
  height: 0;
`;
