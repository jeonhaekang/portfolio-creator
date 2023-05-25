import { FontSizeKey } from "@sun-river/components";
import { CSSProperties } from "react";

export interface AdjustTextareaProps {
  fontSize?: FontSizeKey;
  align?: CSSProperties["textAlign"];
}

export interface AdjustTextareaStyleProps extends AdjustTextareaProps {
  width: number;
  height: number;
}
