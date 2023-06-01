import { ColorsKey, Tooltip, theme, utils } from "@sun-river/components";
import { useCallback } from "react";
import { useSectionContext } from "~/components";
import { useCreateContext } from "~/pages/create/index.page";
import * as Styled from "./BgColorController.styles";
import { BgColorControllerProps } from "./BgColorController.types";

export const BgColorController = ({ id }: BgColorControllerProps) => {
  const { setColors } = useSectionContext();
  const { setPortfolioSections } = useCreateContext();

  const onChangeBgColor = useCallback(
    (color: ColorsKey) => {
      setColors(color);

      setPortfolioSections(sections =>
        sections.map(section =>
          section.id === id ? { ...section, bgColor: color } : section
        )
      );
    },
    [id, setColors, setPortfolioSections]
  );

  return (
    <Tooltip label="섹션의 배경색을 변경합니다.">
      <Styled.ColorPicker>
        {utils.common.getObjectKeys(theme.colors).map(color => (
          <Styled.Color
            key={color}
            color={color}
            onClick={() => onChangeBgColor(color)}
          />
        ))}
      </Styled.ColorPicker>
    </Tooltip>
  );
};
