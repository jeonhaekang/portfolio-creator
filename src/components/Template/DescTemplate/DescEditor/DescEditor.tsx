import {
  AdjustInput,
  AdjustTextarea,
  BgColorPicker,
  OrderController
} from "~/components";
import { EditorProps } from "../../Template.types";
import { DescSection } from "../Shared";
import { useDescEditor } from "./DescEditor.hooks";
import { DescEditorFrom } from "./DescEditor.types";

export const DescEditor = (props: EditorProps<DescEditorFrom>) => {
  const app = useDescEditor(props);

  return (
    <DescSection>
      <AdjustInput fontSize="heading1" {...app.descForm.register("title")} />

      <AdjustTextarea
        fontSize="paragraph2"
        {...app.descForm.register("description")}
      />

      <BgColorPicker id={props.id} />
      <OrderController id={props.id} />
    </DescSection>
  );
};
