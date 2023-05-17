import styled from "@emotion/styled";
import {
  flex,
  position,
  setSize,
  setTypography,
  theme
} from "@sun-river/components";
import { MAIN_HEADER_HEIGHT } from "./MainHeader.constants";

export const Container = styled.header`
  ${position.sticky({ top: 0, left: 0 })}

  ${setSize("100%", 0)}
`;

export const Contents = styled.header`
  ${flex({ align: "center" })}

  ${setSize({ width: "100%", height: MAIN_HEADER_HEIGHT })}

  background-color: transparent;

  padding: 0 1.5rem;
`;

export const Title = styled.h1`
  ${setTypography("heading3")}
  color: ${theme.colors.white};
`;

export const Menus = styled.div`
  ${flex({ gap: "2rem" })}

  margin-left: auto;
`;

export const MenuButton = styled.button`
  ${setTypography("paragraph2")}
  color: ${theme.colors.white};
`;
