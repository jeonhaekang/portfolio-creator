import { Button } from "@sun-river/components";
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

      {app.portfolio.current.sections.map(({ type, id, data }) => {
        switch (type) {
          case DESC_TEMPLATE_TYPE:
            return (
              <DescEditor
                id={id}
                defaultValue={data}
                onChange={app.onChangeSection}
              />
            );
          case CARD_TEMPLATE_TYPE:
            return (
              <CardEditor
                id={id}
                defaultValue={data}
                onChange={app.onChangeSection}
              />
            );
          default:
            return (
              <MainEditor
                id={id}
                defaultValue={data}
                onChange={app.onChangeSection}
              />
            );
        }
      })}

      <Button onClick={app.requestCreatePortfolio}>생성</Button>

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
