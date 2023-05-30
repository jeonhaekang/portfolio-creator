import { ColorsKey } from "@sun-river/components";
import { SetStateType } from "~/types/Common";

export interface SectionProps {
  color?: ColorsKey;
  full?: boolean;
  center?: boolean;
}

export interface SectionValues {
  _color: ColorsKey;
  setColors: SetStateType<ColorsKey>;
}
