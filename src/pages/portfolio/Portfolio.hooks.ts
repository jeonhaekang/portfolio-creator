import { useRouter } from "next/router";
import { useMemo } from "react";
import { useGetPortfolio } from "~/state/server/portfolio/queries";

export const usePortfolio = () => {
  const { query } = useRouter();

  const uid = useMemo(() => query.uid as string, [query.uid]);

  const { data: portfolio } = useGetPortfolio(uid);

  return {
    portfolio
  };
};
