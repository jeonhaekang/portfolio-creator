import { useEffect } from "react";
import { DefaultTemplate } from "~/components";
import { useForm } from "~/hooks";
import { DescSection } from "~/types/Portfolio";
import { DESC_TEMPLATE_INIT } from "./DescTemplate.constants";

export const useDescTemplate = ({
  id,
  onChange,
  defaultValue
}: DefaultTemplate<DescSection>) => {
  const descForm = useForm({
    ...DESC_TEMPLATE_INIT,
    ...defaultValue
  });

  useEffect(() => {
    onChange && onChange(id, descForm.data);
  }, [descForm, id, onChange]);

  return { descForm };
};
