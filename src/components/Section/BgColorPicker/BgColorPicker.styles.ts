import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  ColorsKey,
  flex,
  position,
  setSelectorStyle,
  setSize,
  theme
} from "@sun-river/components";

export const ColorPicker = styled.ul`
  ${position.posCenterX({ position: "absolute", top: "2rem" })}

  ${flex({ gap: "0.5rem" })};

  padding: 1rem;

  background-color: ${theme.colors.white};
  box-shadow: ${theme.effect.shadow.drop3};

  border-radius: 1rem;

  ${setSelectorStyle("opacity", { base: 0.2, hover: 1 })}
  transition: 300ms;
`;

export const Color = styled.li<{ color: ColorsKey }>`
  ${setSize("2rem", "2rem")}

  ${({ color }) =>
    css`
      background-color: ${theme.colors[color]};

      border-radius: 1rem;
    `}
    box-shadow: ${theme.effect.shadow.drop2};

  cursor: pointer;
`;
