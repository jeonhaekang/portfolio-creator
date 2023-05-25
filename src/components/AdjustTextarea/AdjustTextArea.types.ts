import { FontSizeKey } from "@sun-river/components";

export interface AdjustTextareaProps {
  fontSize?: FontSizeKey;
}

export interface AdjustTextareaStyleProps extends AdjustTextareaProps {
  width: number;
  height: number;
}
