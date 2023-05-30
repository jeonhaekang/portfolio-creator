import { Button } from "@sun-river/components";
import { createContext, useContext } from "react";
import {
  AddTemplate,
  DESC_TEMPLATE_TYPE,
  DescTemplate,
  MainTemplate
} from "~/components";
import { useCreate } from "./Create.hooks";
import { CreateValues } from "./Create.types";

const CreateContext = createContext<CreateValues | null>(null);

export default function Create() {
  const app = useCreate();

  return (
    <CreateContext.Provider value={app.values}>
      {app.sections.current.map(({ id, type }) => {
        switch (type) {
          case DESC_TEMPLATE_TYPE:
            return <DescTemplate {...app.getTemplateAttributes(id)} />;
          default:
            return <MainTemplate {...app.getTemplateAttributes(id)} />;
        }
      })}

      <Button size="large" onClick={app.createPortfolio}>
        작성완료!
      </Button>
      <AddTemplate />
    </CreateContext.Provider>
  );
}

export const useCreateContext = () => {
  const createContext = useContext(CreateContext);

  if (!createContext) {
    throw Error("useCreateContext is only available within createContext.");
  }

  return createContext;
};
