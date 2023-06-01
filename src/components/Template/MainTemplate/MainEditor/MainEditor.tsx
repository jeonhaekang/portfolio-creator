import {
  AdjustInput,
  AdjustTextarea,
  BgColorController,
  EditorProps,
  ImageUpload,
  OrderController
} from "~/components";
import { MainSection } from "../Shared";
import { useMainEditor } from "./MainEditor.hooks";
import { MainEditorFrom } from "./MainEditor.types";

export const MainEditor = (props: EditorProps<MainEditorFrom>) => {
  const app = useMainEditor(props);

  return (
    <MainSection>
      <ImageUpload width={20} height={20} {...app.mainForm.register("image")} />

      <AdjustInput fontSize="heading1" {...app.mainForm.register("title")} />

      <AdjustTextarea
        fontSize="paragraph2"
        {...app.mainForm.register("description")}
      />

      <BgColorController id={props.id} />
      <OrderController id={props.id} />
    </MainSection>
  );
};
