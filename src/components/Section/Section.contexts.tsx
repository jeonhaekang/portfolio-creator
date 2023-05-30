import { ColorsKey } from "@sun-river/components";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState
} from "react";
import { SECTION_DEFAULT } from "./Section.constants";
import * as Styled from "./Section.styles";
import { SectionProps, SectionValues } from "./Section.types";

const SectionContext = createContext<SectionValues | null>(null);

export const Section = ({
  children,
  color = SECTION_DEFAULT.bgColor,
  ...props
}: PropsWithChildren<SectionProps>) => {
  const [_color, setColors] = useState<ColorsKey>(color);

  const values = useMemo(
    () => ({
      _color,
      setColors
    }),
    [_color]
  );

  return (
    <SectionContext.Provider value={values}>
      <Styled.Section color={_color} {...props}>
        {children}
      </Styled.Section>
    </SectionContext.Provider>
  );
};

export const useSectionContext = () => {
  const sectionContext = useContext(SectionContext);

  if (!sectionContext) {
    throw Error("useSectionContext is only available within Section.");
  }

  return sectionContext;
};
