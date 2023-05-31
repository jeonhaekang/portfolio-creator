import styled from "@emotion/styled";
import {
  flex,
  position,
  setSelectorStyle,
  setSize,
  setTypography,
  theme
} from "@sun-river/components";
import Link from "next/link";
import { hexToRgba } from "~/utils";

export const Container = styled.div`
  overflow: hidden;

  border-radius: 0.5rem;

  background-color: ${theme.colors.white};
`;

export const ImageBox = styled.div`
  position: relative;

  overflow: hidden;

  padding-bottom: 60%;

  background-color: ${theme.colors.gray1};
`;

export const ImageTitle = styled.div`
  ${position.absolute()}

  ${flex.center()}

  ${setSize("100%", "100%")}

  
  background-color:${hexToRgba(theme.colors.black, 0.6)};

  ${setSelectorStyle("opacity", { hover: 0 })}
  transition: 300ms;
`;

export const TextBox = styled.div`
  ${flex.column({ gap: "0.5rem" })}

  padding: 1rem;
`;

export const HighlightLink = styled(Link)`
  position: relative;
  z-index: 0;

  width: fit-content;

  ${setTypography("paragraph3")}

  &::before {
    content: "";
    ${position.absolute({ left: 0, bottom: 0 })}
    z-index: -1;

    ${setSize("100%", "0.5rem")}

    background-color: ${theme.colors.mustard};
  }
`;
