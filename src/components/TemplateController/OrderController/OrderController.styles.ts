import styled from "@emotion/styled";
import { position, setSelectorStyle, theme } from "@sun-river/components";

export const Controller = styled.div`
  ${position.absolute({ right: "2rem", bottom: "2rem" })}

  display: flex;

  padding: 0.3rem 0.6rem;

  background-color: ${theme.colors.white};

  border-radius: 1rem;

  font-size: 1.5rem;

  ${setSelectorStyle("opacity", { base: 0.2, hover: 1 })}
  transition: 300ms;
`;
