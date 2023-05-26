import { useEffect } from "react";
import { useForm } from "~/hooks";
import { DESC_TEMPLATE_INIT } from "./DescTemplate.constants";
import { DescTemplateProps } from "./DescTemplate.types";

export const useDescTemplate = ({
  onChange,
  defaultValue
}: DescTemplateProps) => {
  const descForm = useForm({
    ...DESC_TEMPLATE_INIT,
    ...defaultValue
  });

  useEffect(() => {
    onChange && onChange(descForm.data);
  }, [descForm, onChange]);

  return { descForm };
};