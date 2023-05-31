import { MainSection } from "~/types/Portfolio";
import { DefaultTemplate } from "../Templates.types";

export interface MainTemplate extends Omit<MainSection, "image"> {
  image: string | File;
}

export type MainTemplateProps = DefaultTemplate<MainTemplate>;
