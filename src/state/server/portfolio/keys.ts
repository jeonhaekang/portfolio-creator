import { QueryKeys } from "../QueryKeys";

export const PortfolioKey = {
  getPortfolio: (uid: string) => [QueryKeys.PORTFOLIO, "getPortfolio", uid]
} as const;
