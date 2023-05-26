import { useState } from "react";
import { Portfolio } from "./Create.types";

export const useCreate = () => {
  const [portfolio, setPortfolio] = useState<Portfolio[]>([
    { section: { color: "green", full: true } },
    { section: { color: "peach", full: true } },
    { section: { color: "orange", full: true } }
  ]);

  return {
    portfolio
  };
};
