import { Button } from "@sun-river/components";
import { createContext, useContext } from "react";
import { AddTemplate } from "~/components";
import { CreateHeader } from "~/components/Headers/CreateHeader";
import { MainEditor } from "~/components/Template";
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
