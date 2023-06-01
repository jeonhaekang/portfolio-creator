import { ColorsKey } from "@sun-river/components";
import {
  CARD_TEMPLATE_TYPE,
  DESC_TEMPLATE_TYPE,
  MAIN_TEMPLATE_TYPE
} from "~/components";
import { CardForm } from "~/components/Templates/CardTemplate/AddCard";

export interface DefaultSection {
  id: string;
  color?: ColorsKey;
}

export interface MainSection {
  image: string;
  title: string;
  description: string;
}

export interface DescSection {
  title: string;
  description: string;
}

export interface CardSection {
  title: string;
  description: string;
  cards: CardForm[];
}

export interface MainSectionDTO extends DefaultSection {
  type: typeof MAIN_TEMPLATE_TYPE;
  data: MainSection;
}

export interface DescSectionDTO extends DefaultSection {
  type: typeof DESC_TEMPLATE_TYPE;
  data: DescSection;
}

export interface CardSectionDTO extends DefaultSection {
  type: typeof CARD_TEMPLATE_TYPE;
  data: CardSection;
}

export type PortfolioSection = MainSectionDTO | DescSectionDTO | CardSectionDTO;

export type PortfolioSectionType = PortfolioSection["type"];

export interface PortfolioPayload {
  uid: string;
  sections: PortfolioSection[];
}

export interface Portfolio {
  header: {
    title: string;
  };
  sections: PortfolioSection[];
}
