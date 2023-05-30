import { Button } from "@sun-river/components";
import { createContext, useContext } from "react";
import { AddTemplate, MainTemplate } from "~/components";
import { TEMPLATE_COMPONENT_MAP } from "./Create.constants";
import { useCreate } from "./Create.hooks";
import { CreateValues, Section } from "./Create.types";

const CreateContext = createContext<CreateValues | null>(null);

export default function Create() {
  const app = useCreate();

  return (
    <CreateContext.Provider value={app.values}>
      {app.sections.current.map(({ id, type }) => {
        const Section = TEMPLATE_COMPONENT_MAP[type] || MainTemplate;

        return (
          <Section
            key={id}
            id={id}
            onChange={formData => {
              app.setSections(
                prev =>
                  prev.map(section =>
                    section.id === id ? { ...section, data: formData } : section
                  ) as Section[]
              );
            }}
          />
        );
      })}
      <Button onClick={app.createPortfolio}>작성완료!</Button>
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
