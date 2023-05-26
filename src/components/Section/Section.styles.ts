import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { flex, setSize, theme } from "@sun-river/components";
import { SECTION_DEFAULT } from "./Section.constants";
import { SectionProps } from "./Section.types";

const baseStyle = ({
  color = SECTION_DEFAULT.bgColor,
  full,
  center
}: SectionProps) => {
  const { colors } = theme;

  return css`
    ${center && flex.center({ direction: "column" })}

    ${full && setSize({ minHeight: "100vh" })}
    overflow-x: hidden;

    padding: 3rem 2rem;

    background-color: ${colors[color]};
  `;
};

export const Section = styled.section<SectionProps>`
  ${props => baseStyle(props)}
`;
