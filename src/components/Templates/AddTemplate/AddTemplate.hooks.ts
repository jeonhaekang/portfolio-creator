import _ from "lodash";
import { useCallback } from "react";
import { v4 as uuid } from "uuid";
import { useCreateContext } from "~/pages/create/index.page";
import { PortfolioSection, PortfolioSectionType } from "~/types/Portfolio";
import { TEMPLATE_INIT_MAP } from "./AddTemplate.constants";

export const useAddTemplate = () => {
  const { setPortfolio, requestRender } = useCreateContext();

  const addSection = useCallback(
    (type: PortfolioSectionType) => {
      setPortfolio(portfolio => {
        const _portfolio = _.cloneDeep(portfolio);

        const newSection = {
          id: uuid(),
          bgColor: "coral",
          type,
          data: TEMPLATE_INIT_MAP[type]
        } as PortfolioSection;

        _portfolio.sections.push(newSection);

        return _portfolio;
      });

      requestRender();
    },
    [requestRender, setPortfolio]
  );

  return { addSection };
};
