import styled from "@emotion/styled";
import {
  flex,
  position,
  setSize,
  setTypography,
  theme
} from "@sun-river/components";
import { MAIN_HEADER_HEIGHT } from "./MainHeader/MainHeader.constants";

export const Container = styled.header`
  ${position.sticky({ top: 0, left: 0 })}

  ${setSize("100%", 0)}

  z-index: 100;
`;

export const Contents = styled.div`
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
  position: relative;

  ${setTypography("paragraph2")}
  color: ${theme.colors.white};

  &::after {
    content: "";
    ${position.absolute({ left: 0, bottom: -2 })}

    ${setSize("100%", 2)}

    transform: scaleX(0);
    transform-origin: left;
    transition: 300ms;

    background-color: ${theme.colors.white};
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
