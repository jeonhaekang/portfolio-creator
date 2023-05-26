import { useEffect } from "react";
import { useForm } from "~/hooks";
import { DescTemplateProps } from "./DescTemplate.types";

export const useDescTemplate = ({
  onChange,
  defaultValue
}: DescTemplateProps) => {
  const descForm = useForm({
    title: "제목을 입력해 주세요",
    description: "내용을 입력해 주세요",
    ...defaultValue
  });

  useEffect(() => {
    onChange && onChange(descForm.data);
  }, [descForm, onChange]);

  return { descForm };
};
