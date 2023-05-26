import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { flex, position, setSize, theme } from "@sun-river/components";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { hexToRgba } from "~/utils";
import { FileUploadProps } from "./ImageUpload.types";

const labelStyle = ({ width, height }: FileUploadProps) => {
  return css`
    position: relative;

    ${flex.center({ direction: "column" })};

    ${setSize(`${width}rem`, `${height}rem`)};

    border: 1px dashed ${hexToRgba(theme.colors.white, 0.6)};
  `;
};

export const Label = styled.label<FileUploadProps>`
  ${labelStyle}
`;

export const Input = styled.input`
  display: none;
`;

export const CloudIcon = styled(AiOutlineCloudUpload)`
  ${setSize("3rem", "3rem")}

  color: ${theme.colors.white};
`;

export const PreviewImage = styled.img`
  ${position.absolute({ left: 0, top: 0 })}

  ${setSize("100%", "100%")}

  object-fit: cover;
  object-position: center;
`;
