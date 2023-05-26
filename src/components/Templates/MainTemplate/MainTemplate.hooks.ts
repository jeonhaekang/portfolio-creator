import { useEffect } from "react";
import { useForm } from "~/hooks";
import { MAIN_TEMPLATE_INIT } from "./MainTemplate.constants";
import { MainTemplateProps } from "./MainTemplate.types";

export const useMainTemplate = ({
  defaultValue,
  onChange
}: MainTemplateProps) => {
  const mainForm = useForm({
    ...MAIN_TEMPLATE_INIT,
    ...defaultValue
  });

  useEffect(() => {
    onChange && onChange(mainForm.data);
  }, [mainForm, onChange]);

  return {
    mainForm
  };
};
