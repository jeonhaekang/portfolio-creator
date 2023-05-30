import { Button } from "@sun-river/components";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState
} from "react";
import { v4 as uuid } from "uuid";
import {
  AddTemplate,
  MAIN_TEMPLATE_INIT,
  MAIN_TEMPLATE_TYPE,
  MainTemplate
} from "~/components";
import { TEMPLATE_COMPONENT_MAP } from "./Create.constants";
import { CreateValues, Section } from "./Create.types";

const CreateContext = createContext<CreateValues | null>(null);

export default function Create() {
  const [, setRenderHash] = useState("");

  const sections = useRef<Section[]>([
    { id: uuid(), type: MAIN_TEMPLATE_TYPE, data: MAIN_TEMPLATE_INIT }
  ]);

  const setSections = useCallback(
    (callback: (_sections: Section[]) => typeof _sections) => {
      const __sections = callback(sections.current);

      sections.current = __sections;
    },
    []
  );

  const requestRender = useCallback(() => {
    setRenderHash(JSON.stringify(sections.current));
  }, []);

  const values = useMemo(
    () => ({
      setSections,
      requestRender
    }),
    [requestRender, setSections]
  );

  return (
    <CreateContext.Provider value={values}>
      {sections.current.map(({ id, type }) => {
        const Section = TEMPLATE_COMPONENT_MAP[type] || MainTemplate;

        return (
          <Section
            key={id}
            id={id}
            onChange={formData => {
              setSections(
                prev =>
                  prev.map(section =>
                    section.id === id ? { ...section, data: formData } : section
                  ) as Section[]
              );
            }}
          />
        );
      })}
      <Button onClick={() => console.log(sections.current)}>보기</Button>
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
