import { useCallback } from "react";
import { v4 as uuid } from "uuid";
import { SectionTypes } from "~/pages/create/Create.types";
import { useCreateContext } from "~/pages/create/index.page";
import { TEMPLATE_INIT_MAP } from "./AddTemplate.constants";

export const useAddTemplate = () => {
  const { setSections, requestRender } = useCreateContext();

  const addSection = useCallback(
    (type: SectionTypes) => {
      const data = TEMPLATE_INIT_MAP[type];

      setSections(prev => [...prev, { id: uuid(), type, data }]);

      requestRender();
    },
    [requestRender, setSections]
  );

  return { addSection };
};
