import { useCallback } from "react";
import { v4 as uuid } from "uuid";
import { OneOfTemplates } from "~/components/Template/Template.types";
import { useCreateContext } from "~/pages/create/index.page";
import { TEMPLATE_INIT_MAP } from "./AddController.constants";

export const useAddController = () => {
  const { setPortfolioSections, requestRender } = useCreateContext();

  const addSection = useCallback(
    (type: OneOfTemplates["type"]) => {
      setPortfolioSections(sections => {
        const newSection = {
          id: uuid(),
          type,
          data: TEMPLATE_INIT_MAP[type]
        } as OneOfTemplates;

        return [...sections, newSection];
      });

      requestRender();
    },
    [requestRender, setPortfolioSections]
  );

  return { addSection };
};
