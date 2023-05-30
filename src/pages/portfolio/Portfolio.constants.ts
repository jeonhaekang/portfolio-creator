import {
  DESC_TEMPLATE_TYPE,
  DescSection,
  MAIN_TEMPLATE_TYPE,
  MainSection
} from "~/components";

export const SECTION_COMPONENT_MAP = {
  [MAIN_TEMPLATE_TYPE]: MainSection,
  [DESC_TEMPLATE_TYPE]: DescSection
} as const;
