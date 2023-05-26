import { FlexCenter } from "@sun-river/components";
import { AdjustInput } from "~/components/AdjustInput";
import { AdjustTextarea } from "~/components/AdjustTextarea";
import { ImageUpload } from "~/components/ImageUpload";
import { Section } from "~/components/Section";
import { useMainTemplate } from "./MainTemplate.hooks";
import { MainTemplateProps } from "./MainTemplate.types";

export const MainTemplate = (props: MainTemplateProps) => {
  const { mainForm } = useMainTemplate(props);

  return (
    <Section center full>
      <FlexCenter direction="column" gap={12}>
        <ImageUpload
          width={20}
          height={20}
          {...mainForm.controller.register("image", false)}
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
    </Section>
  );
};
