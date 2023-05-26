import { useEffect } from "react";
import { useForm } from "~/hooks";
import { MainTemplateProps } from "./MainTemplate.types";

export const useMainTemplate = ({
  defaultValue,
  onChange
}: MainTemplateProps) => {
  const mainForm = useForm({
    image: "",
    title: "제목을 입력해 주세요",
    description: "내용을 입력해 주세요",
    ...defaultValue
  });

  useEffect(() => {
    onChange && onChange(mainForm.data);
  }, [mainForm, onChange]);

  return {
    mainForm
  };
};
