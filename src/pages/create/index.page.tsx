import { Button } from "@sun-river/components";
import { createContext, useContext } from "react";
import {
  AddTemplate,
  CARD_TEMPLATE_TYPE,
  CardTemplate,
  DESC_TEMPLATE_TYPE,
  DescTemplate,
  MainTemplate
} from "~/components";
import { CreateHeader } from "~/components/Headers/CreateHeader";
import { useCreate } from "./Create.hooks";
import { CreateValues } from "./Create.types";

const CreateContext = createContext<CreateValues | null>(null);

export default function Create() {
  const app = useCreate();

  return (
    <CreateContext.Provider value={app.values}>
      <CreateHeader />

      {app.portfolio.current.sections.map(({ type, data, ...props }) => {
        const _props = {
          ...props,
          key: props.id,
          onChange: app.onChangeSection
        };
        switch (type) {
          case DESC_TEMPLATE_TYPE:
            return <DescTemplate {..._props} defaultValue={data} />;
          case CARD_TEMPLATE_TYPE:
            return <CardTemplate {..._props} defaultValue={data} />;
          default:
            return <MainTemplate {..._props} defaultValue={data} />;
        }
      })}

      <Button onClick={app.requestCreatePortfolio}>생성</Button>

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
