import { FlexColumn } from "@sun-river/components";
import {
  AdjustInput,
  AdjustTextarea,
  BgColorPicker,
  Controller,
  DESC_TEMPLATE_DEFAULT,
  DefaultTemplate,
  Section
} from "~/components";
import { DescSection } from "~/types/Portfolio";
import { useDescTemplate } from "./DescTemplate.hooks";

export const DescTemplate = ({
  bgColor = DESC_TEMPLATE_DEFAULT.bgColor,
  ...props
}: DefaultTemplate<DescSection>) => {
  const { descForm } = useDescTemplate(props);

  return (
    <Section color={bgColor}>
      <FlexColumn gap={24}>
        <AdjustInput
          fontSize="heading1"
          {...descForm.controller.register("title")}
        />

        <AdjustTextarea
          fontSize="paragraph2"
          {...descForm.controller.register("description")}
        />
      </FlexColumn>

      <BgColorPicker id={props.id} />
      <Controller id={props.id} />
    </Section>
  );
};
