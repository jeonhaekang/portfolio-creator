import { ColorsKey } from "@sun-river/components";
import { MainTemplate } from "./MainTemplate";

export type OneOfTemplates = MainTemplate;

export type OneOfEditorForm = OneOfTemplates["data"];

export interface EditorProps<EditorForm extends OneOfEditorForm> {
  id: string;
  color?: ColorsKey;
  defaultValue?: EditorForm;
  onChange: (id: string, data: EditorForm) => void;
}
