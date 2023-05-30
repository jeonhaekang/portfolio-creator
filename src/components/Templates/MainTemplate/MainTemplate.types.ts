export interface MainTemplateForm {
  image?: string;
  title?: string;
  description?: string;
}

export interface MainTemplateProps {
  id: string;
  defaultValue?: MainTemplateForm;
  onChange?: (data: MainTemplateForm) => void;
}
