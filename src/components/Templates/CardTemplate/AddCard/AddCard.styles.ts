import styled from "@emotion/styled";
import { border, flex, theme } from "@sun-river/components";
import { hexToRgba } from "~/utils";

export const Container = styled.div`
  ${flex.column({ gap: "1rem" })}

  padding: 1rem;

  ${border({
    color: hexToRgba(theme.colors.white),
    style: "dashed",
    radius: "1rem"
  })};
`;

export const AddButton = styled.button`
  color: ${theme.colors.white};

  &:disabled {
    opacity: 0.5;
  }
`;
