import { ColorsKey } from "@sun-river/components";
import { MAIN_TEMPLATE_TYPE, MainEditorFrom } from ".";

export interface MainTemplate {
  id: string;
  color?: ColorsKey;
  type: typeof MAIN_TEMPLATE_TYPE;
  data: MainEditorFrom;
}
