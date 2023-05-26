export interface MainTemplateForm {
  image?: string;
  title?: string;
  description?: string;
}

export interface MainTemplateProps {
  defaultValue?: MainTemplateForm;
  onChange?: (data: MainTemplateForm) => void;
}
