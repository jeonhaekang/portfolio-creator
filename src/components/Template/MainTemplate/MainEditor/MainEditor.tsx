import { AdjustInput } from "~/components/AdjustInput";
import { AdjustTextarea } from "~/components/AdjustTextarea";
import { ImageUpload } from "~/components/ImageUpload";
import { BgColorPicker } from "~/components/Sections";
import { OrderController } from "~/components/TemplateController";
import { EditorProps } from "../../Template.types";
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

      <BgColorPicker id={props.id} />
      <OrderController id={props.id} />
    </MainSection>
  );
};
