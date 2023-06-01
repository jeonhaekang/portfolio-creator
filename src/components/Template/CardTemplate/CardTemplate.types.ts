import { ColorsKey } from "@sun-river/components";
import { CardEditorFrom } from "./CardEditor/CardEditor.types";
import { CARD_TEMPLATE_TYPE } from "./CardTemplate.constants";

export interface CardTemplate {
  id: string;
  color?: ColorsKey;
  type: typeof CARD_TEMPLATE_TYPE;
  data: CardEditorFrom;
}
