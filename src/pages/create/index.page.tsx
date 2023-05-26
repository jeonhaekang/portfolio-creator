import { createContext, useContext, useMemo, useState } from "react";
import { v4 as uuid } from "uuid";
import {
  AddTemplate,
  MAIN_TEMPLATE_INIT,
  MAIN_TEMPLATE_TYPE
} from "~/components";
import { TEMPLATE_COMPONENT_MAP } from "./Create.constants";
import { CreateValues, Section } from "./Create.types";

const CreateContext = createContext<CreateValues | null>(null);

const Create = () => {
  const [sections, setSections] = useState<Section[]>([
    { id: uuid(), type: MAIN_TEMPLATE_TYPE, data: MAIN_TEMPLATE_INIT }
  ]);

  const values = useMemo(
    () => ({
      sections,
      setSections
    }),
    [sections]
  );

  return (
    <CreateContext.Provider value={values}>
      {sections.map(({ id, type }) => {
        const Section = TEMPLATE_COMPONENT_MAP[type];

        return <Section key={id} />;
      })}

      <AddTemplate />
    </CreateContext.Provider>
  );
};

export default Create;

export const useCreateContext = () => {
  const createContext = useContext(CreateContext);

  if (!createContext) {
    throw Error("useCreateContext is only available within createContext.");
  }

  return createContext;
};
