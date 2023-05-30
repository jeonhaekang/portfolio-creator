import { MainSection } from "~/types/Portfolio";

export interface MainTemplate extends Omit<MainSection, "image"> {
  image: string | File;
}

export interface MainTemplateProps {
  id: string;
  defaultValue?: MainTemplate;
  onChange?: (data: MainTemplate) => void;
}
