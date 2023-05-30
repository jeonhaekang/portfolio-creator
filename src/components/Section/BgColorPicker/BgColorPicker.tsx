import { Tooltip, theme, utils } from "@sun-river/components";
import { useSectionContext } from "../Section.contexts";
import * as Styled from "./BgColorPicker.styles";

export const BgColorPicker = () => {
  const { setColors } = useSectionContext();

  return (
    <Tooltip label="섹션의 배경색을 변경합니다.">
      <Styled.ColorPicker>
        {utils.common.getObjectKeys(theme.colors).map(color => (
          <Styled.Color
            key={color}
            color={color}
            onClick={() => setColors(color)}
          />
        ))}
      </Styled.ColorPicker>
    </Tooltip>
  );
};
