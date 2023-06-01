import { createContext, useContext } from "react";
import { AddController } from "~/components";
import { CreateHeader } from "~/components/Headers/CreateHeader";
import {
  CARD_TEMPLATE_TYPE,
  CardEditor,
  DESC_TEMPLATE_TYPE,
  DescEditor,
  MainEditor
} from "~/components/Template";
import { useCreate } from "./Create.hooks";
import { CreateValues } from "./Create.types";

const CreateContext = createContext<CreateValues | null>(null);

export default function Create() {
  const app = useCreate();

  return (
    <CreateContext.Provider value={app.values}>
      <CreateHeader />

      {app.getPortfolio().sections.map(({ type, data, ...props }) => {
        const _props = {
          ...props,
          key: props.id,
          onChange: app.onChangeSection
        } as const;

        switch (type) {
          case DESC_TEMPLATE_TYPE:
            return <DescEditor {..._props} defaultValue={data} />;
          case CARD_TEMPLATE_TYPE:
            return <CardEditor {..._props} defaultValue={data} />;
          default:
            return <MainEditor {..._props} defaultValue={data} />;
        }
      })}

      <AddController />
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
