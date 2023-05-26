export interface DescTemplateForm {
  title: string;
  description: string;
}

export interface DescTemplateProps {
  defaultValue?: DescTemplateForm;
  onChange?: (data: DescTemplateForm) => void;
}
