import { InputHTMLAttributes } from "react";
import { Size } from "~/types/Common";

export interface ImageUploadProps
  extends Size,
    Omit<InputHTMLAttributes<HTMLInputElement>, "width" | "height" | "value"> {
  value?: string;
}
