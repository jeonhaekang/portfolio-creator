import { Portfolio } from "~/types/Portfolio";

export interface CreateValues {
  getPortfolio: () => Portfolio;
  setPortfolio: (callback: (portfolio: Portfolio) => typeof portfolio) => void;
  setPortfolioSections: (
    callback: (sections: Portfolio["sections"]) => typeof sections
  ) => void;
  setPortfolioHeader: (
    callback: (header: Portfolio["header"]) => typeof header
  ) => void;
  requestRender: VoidFunction;
}
