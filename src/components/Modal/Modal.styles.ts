import styled from "@emotion/styled";
import { fade, position, setSize, theme } from "@sun-river/components";
import { hexToRgba } from "~/utils";

export const Overlay = styled.div`
  ${position.fixed()}
  z-index: 9999;

  ${fade({ play: "in" })}
`;

export const Background = styled.div`
  ${setSize("100vw", "100vh")}

  background-color: ${hexToRgba(theme.colors.black, 0.7)};
`;

export const Content = styled.div<{ width: number }>`
  ${position.posCenter()}

  overflow: scroll;

  ${({ width }) =>
    setSize({
      width,
      maxWidth: `calc(100vw - 6rem)`,
      maxHeight: `calc(100vh - 6rem)`
    })}

  padding: 1rem;

  background-color: ${theme.colors.white};

  border-radius: 0.7rem;
`;
