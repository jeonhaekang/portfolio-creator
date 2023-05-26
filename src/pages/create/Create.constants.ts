import {
  DESC_TEMPLATE_TYPE,
  DescTemplate,
  MAIN_TEMPLATE_TYPE,
  MainTemplate
} from "~/components";

export const TEMPLATE_COMPONENT_MAP = {
  [MAIN_TEMPLATE_TYPE]: MainTemplate,
  [DESC_TEMPLATE_TYPE]: DescTemplate
} as const;
