import { ColorsKey } from "@sun-river/components";
import { MAIN_TEMPLATE_TYPE, MainTemplateForm } from "~/components";
import {
  DESC_TEMPLATE_TYPE,
  DescTemplateForm
} from "~/components/Templates/DescTemplate";

export interface MainSection {
  id: string;
  bgColor: ColorsKey;
  type: typeof MAIN_TEMPLATE_TYPE;
  data: MainTemplateForm;
}

export interface DescSection {
  id: string;
  bgColor: ColorsKey;
  type: typeof DESC_TEMPLATE_TYPE;
  data: DescTemplateForm;
}

export type Section = MainSection | DescSection;

export type SectionTypes = Section["type"];

export interface CreateValues {
  setSections: (callback: (sections: Section[]) => typeof sections) => void;
  requestRender: VoidFunction;
}
