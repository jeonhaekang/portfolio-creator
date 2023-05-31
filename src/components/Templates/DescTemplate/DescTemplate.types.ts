import { DescSection } from "~/types/Portfolio";

export interface DescTemplateProps {
  id: string;
  defaultValue?: DescSection;
  onChange?: (id: string, data: DescSection) => void;
}
