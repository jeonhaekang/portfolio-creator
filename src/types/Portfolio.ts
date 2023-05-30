import { ColorsKey } from "@sun-river/components";
import { DESC_TEMPLATE_TYPE, MAIN_TEMPLATE_TYPE } from "~/components";

export interface DefaultSection {
  id: string;
  bgColor: ColorsKey;
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

export interface MainSectionDTO extends DefaultSection {
  type: typeof MAIN_TEMPLATE_TYPE;
  data: MainSection;
}

export interface DescSectionDTO extends DefaultSection {
  type: typeof DESC_TEMPLATE_TYPE;
  data: DescSection;
}

export type PortfolioSection = MainSectionDTO | DescSectionDTO;

export type PortfolioSectionType = PortfolioSection["type"];

export interface PortfolioPayload {
  uid: string;
  sections: PortfolioSection[];
}
