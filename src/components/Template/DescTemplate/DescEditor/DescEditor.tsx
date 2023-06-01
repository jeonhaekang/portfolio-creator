import {
  AdjustInput,
  AdjustTextarea,
  BgColorController,
  EditorProps,
  OrderController
} from "~/components";
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

      <BgColorController id={props.id} />
      <OrderController id={props.id} />
    </DescSection>
  );
};
