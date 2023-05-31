import { ColorsKey } from "@sun-river/components";
import { MainSection } from "~/types/Portfolio";

export interface MainSectionProps extends MainSection {
  bgColor?: ColorsKey;
  image: string;
}
