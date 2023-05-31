export interface CardForm {
  image: string | File;
  title: string;
  subTitle: string;
  description: string;
  linkLabel: string;
  link: string;
}

export interface AddCardProps {
  onAdd: (card: CardForm) => void;
}
