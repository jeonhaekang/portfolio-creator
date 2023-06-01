import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { position, theme } from "@sun-river/components";

const addTemplateStyle = () => {
  const { colors, effect } = theme;

  return css`
    ${position.fixed({ bottom: 0, left: "50%" })}

    display: flex;

    padding: 0.5rem;

    background-color: ${colors.white};

    border-radius: 0.7rem 0.7rem 0 0;

    box-shadow: ${effect.shadow.drop3};

    transform: translate(-50%, 80%);
    transition: 300ms;

    &:hover {
      transform: translate(-50%, 0);
    }
  `;
};

export const TemplateList = styled.ul`
  ${addTemplateStyle}
`;

export const TemplateItem = styled.li`
  padding: 0 0.5rem;

  & + li {
    border-left: 1px solid ${theme.colors.gray2};
  }
`;
