export interface DescTemplateForm {
  title: string;
  description: string;
}

export interface DescTemplateProps {
  id: string;
  defaultValue?: DescTemplateForm;
  onChange?: (data: DescTemplateForm) => void;
}
