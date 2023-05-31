import { FlexCenter } from "@sun-river/components";
import {
  AdjustInput,
  AdjustTextarea,
  BgColorPicker,
  Controller,
  ImageUpload,
  MAIN_TEMPLATE_DEFAULT,
  MainTemplateProps,
  Section
} from "~/components";
import { useMainTemplate } from "./MainTemplate.hooks";

export const MainTemplate = (props: MainTemplateProps) => {
  const { mainForm } = useMainTemplate(props);

  return (
    <Section center full color={MAIN_TEMPLATE_DEFAULT.bgColor}>
      <FlexCenter direction="column" gap={12}>
        <ImageUpload
          width={20}
          height={20}
          {...mainForm.controller.register("image")}
        />

        <AdjustInput
          fontSize="heading1"
          {...mainForm.controller.register("title")}
        />

        <AdjustTextarea
          fontSize="paragraph2"
          align="center"
          {...mainForm.controller.register("description")}
        />
      </FlexCenter>

      <BgColorPicker id={props.id} />
      <Controller id={props.id} />
    </Section>
  );
};
