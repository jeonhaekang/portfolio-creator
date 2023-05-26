import { InputHTMLAttributes } from "react";

export interface ImageUploadStyleProps {
  width?: number;
  height?: number;
}

export type ImageUploadProps = ImageUploadStyleProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "width" | "height">;
