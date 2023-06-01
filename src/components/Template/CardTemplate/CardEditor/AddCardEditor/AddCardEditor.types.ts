export interface AddCardEditorForm {
  image: string | File;
  title: string;
  subTitle: string;
  description: string;
  linkLabel: string;
  link: string;
}

export interface AddCardEditorProps {
  onAdd: (card: AddCardEditorForm) => void;
}
