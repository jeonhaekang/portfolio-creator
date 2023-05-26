import { InputHTMLAttributes } from "react";
import { Size } from "~/types/Common";

export type ImageUploadProps = Size &
  Omit<InputHTMLAttributes<HTMLInputElement>, "width" | "height">;
