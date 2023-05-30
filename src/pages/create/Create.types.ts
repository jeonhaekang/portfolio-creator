import { PortfolioSection } from "~/types/Portfolio";

export interface CreateValues {
  setSections: (
    callback: (sections: PortfolioSection[]) => typeof sections
  ) => void;
  requestRender: VoidFunction;
}
