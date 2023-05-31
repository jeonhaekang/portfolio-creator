import { useEffect } from "react";
import { useForm } from "~/hooks";
import { MAIN_TEMPLATE_INIT } from "./MainTemplate.constants";
import { MainTemplateProps } from "./MainTemplate.types";

export const useMainTemplate = ({
  id,
  defaultValue,
  onChange
}: MainTemplateProps) => {
  const mainForm = useForm({
    ...MAIN_TEMPLATE_INIT,
    ...defaultValue
  });

  useEffect(() => {
    onChange && onChange(id, mainForm.data);
  }, [id, mainForm, onChange]);

  return {
    mainForm
  };
};
