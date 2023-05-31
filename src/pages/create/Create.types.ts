import { Portfolio } from "~/types/Portfolio";

export interface CreateValues {
  getPortfolio: () => Portfolio;
  setPortfolio: (callback: (portfolio: Portfolio) => typeof portfolio) => void;
  requestRender: VoidFunction;
}
