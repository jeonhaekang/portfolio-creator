import { ColorsKey } from "@sun-river/components";
import { CardSection } from "~/types/Portfolio";

export interface CardSectionProps extends CardSection {
  bgColor?: ColorsKey;
}
