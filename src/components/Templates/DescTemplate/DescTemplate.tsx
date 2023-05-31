import { FlexColumn } from "@sun-river/components";
import {
  AdjustInput,
  AdjustTextarea,
  BgColorPicker,
  Controller,
  DESC_TEMPLATE_DEFAULT,
  DescTemplateProps,
  Section
} from "~/components";
import { useDescTemplate } from "./DescTemplate.hooks";

export const DescTemplate = (props: DescTemplateProps) => {
  const { descForm } = useDescTemplate(props);

  return (
    <Section color={DESC_TEMPLATE_DEFAULT.bgColor}>
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
