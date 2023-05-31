import { useCallback } from "react";
import { v4 as uuid } from "uuid";
import { useCreateContext } from "~/pages/create/index.page";
import { PortfolioSection, PortfolioSectionType } from "~/types/Portfolio";
import { TEMPLATE_INIT_MAP } from "./AddTemplate.constants";

export const useAddTemplate = () => {
  const { setPortfolioSections, requestRender } = useCreateContext();

  const addSection = useCallback(
    (type: PortfolioSectionType) => {
      setPortfolioSections(sections => {
        const newSection = {
          id: uuid(),
          bgColor: "coral",
          type,
          data: TEMPLATE_INIT_MAP[type]
        } as PortfolioSection;

        return [...sections, newSection];
      });

      requestRender();
    },
    [requestRender, setPortfolioSections]
  );

  return { addSection };
};
