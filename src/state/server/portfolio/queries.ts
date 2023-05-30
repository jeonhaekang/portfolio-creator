import { useSuspendedQuery } from "~/hooks";
import { getPortfolio } from "./apis";
import { PortfolioKey } from "./keys";

export const useGetPortfolio = (uid: string) => {
  return useSuspendedQuery(
    PortfolioKey.getPortfolio(uid),
    () => getPortfolio(uid),
    {
      enabled: !!uid
    }
  );
};
