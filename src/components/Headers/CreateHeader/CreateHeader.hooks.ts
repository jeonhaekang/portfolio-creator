import { useEffect } from "react";
import { useForm } from "~/hooks";
import { useCreateContext } from "~/pages/create/index.page";

export const useCreateHeader = () => {
  const { getPortfolio, setPortfolioHeader, requestCreatePortfolio } =
    useCreateContext();

  const headerForm = useForm(getPortfolio().header);

  useEffect(() => {
    setPortfolioHeader(() => headerForm.data);
  }, [headerForm.data, setPortfolioHeader]);

  return {
    headerForm,
    requestCreatePortfolio
  };
};
