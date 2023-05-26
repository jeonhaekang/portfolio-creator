import { MAIN_TEMPLATE_TYPE, MainTemplateForm } from "~/components";
import {
  DESC_TEMPLATE_TYPE,
  DescTemplateForm
} from "~/components/Templates/DescTemplate";
import { SetStateType } from "~/types/Common";

export interface MainSection {
  id: string;
  type: typeof MAIN_TEMPLATE_TYPE;
  data: MainTemplateForm;
}

export interface DescSection {
  id: string;
  type: typeof DESC_TEMPLATE_TYPE;
  data: DescTemplateForm;
}

export type Section = MainSection | DescSection;

export type SectionTypes = Section["type"];

export interface CreateValues {
  sections: Section[];
  setSections: SetStateType<Section[]>;
}
