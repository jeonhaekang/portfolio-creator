import { OneOfTemplates } from "~/components/Template/Template.types";

export interface PortfolioForm {
  header: {
    title: string;
  };
  sections: OneOfTemplates[];
}

export interface CreateValues {
  getPortfolio: () => PortfolioForm;
  setPortfolio: (
    callback: (portfolio: PortfolioForm) => typeof portfolio
  ) => void;
  setPortfolioSections: (
    callback: (sections: PortfolioForm["sections"]) => typeof sections
  ) => void;
  setPortfolioHeader: (
    callback: (header: PortfolioForm["header"]) => typeof header
  ) => void;
  requestRender: VoidFunction;
}
