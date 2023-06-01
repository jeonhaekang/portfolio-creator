import { ColorsKey } from "@sun-river/components";
import { MainEditorFrom } from "./MainTemplate";

export type OneOfEditorForm = MainEditorFrom;

export interface EditorProps<EditorForm extends OneOfEditorForm> {
  id: string;
  color?: ColorsKey;
  defaultValue?: EditorForm;
  onChange: (id: string, data: EditorForm) => void;
}
