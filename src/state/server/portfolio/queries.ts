import { useSuspendedQuery } from "~/hooks";
import { getPortfolio } from "./apis";
import { PortfolioKey } from "./keys";

export const useGetPortfolio = (uid: string, trigger = true) => {
  return useSuspendedQuery(
    PortfolioKey.getPortfolio(uid),
    () => getPortfolio(uid),
    {
      enabled: trigger && !!uid
    }
  );
};
