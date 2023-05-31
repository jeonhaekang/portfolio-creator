import { PortfolioSection } from "~/types/Portfolio";

export interface DefaultTemplate<Section extends PortfolioSection["data"]> {
  id: string;
  defaultValue?: Section;
  onChange?: (id: string, data: Section) => void;
}
