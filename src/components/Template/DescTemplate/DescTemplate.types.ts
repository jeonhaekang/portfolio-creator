import { ColorsKey } from "@sun-river/components";
import { DescEditorFrom } from "./DescEditor";
import { DESC_TEMPLATE_TYPE } from "./DescTemplate.constants";

export interface DescTemplate {
  id: string;
  color?: ColorsKey;
  type: typeof DESC_TEMPLATE_TYPE;
  data: DescEditorFrom;
}
