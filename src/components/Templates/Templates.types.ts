import { DefaultSection, PortfolioSection } from "~/types/Portfolio";

export interface DefaultTemplate<Section extends PortfolioSection["data"]>
  extends DefaultSection {
  defaultValue?: Section;
  onChange?: (id: string, data: Section) => void;
}
