import { PropsWithChildren } from "react";
import * as Styled from "./Section.styles";
import { SectionProps } from "./Section.types";

export const Section = ({
  children,
  ...props
}: PropsWithChildren<SectionProps>) => {
  return <Styled.Section {...props}>{children}</Styled.Section>;
};
