import { Button, Tooltip } from "@sun-river/components";
import { DESC_TEMPLATE_TYPE, MAIN_TEMPLATE_TYPE } from "~/components";
import { CARD_TEMPLATE_TYPE } from "../CardTemplate";
import { useAddTemplate } from "./AddTemplate.hooks";
import * as Styled from "./AddTemplate.styles";

export const AddTemplate = () => {
  const app = useAddTemplate();

  return (
    <Styled.TemplateList>
      <Styled.TemplateItem>
        <Tooltip label="메인 섹션을 추가합니다.">
          <Button
            variant="text"
            onClick={() => app.addSection(MAIN_TEMPLATE_TYPE)}
          >
            Main
          </Button>
        </Tooltip>
      </Styled.TemplateItem>

      <Styled.TemplateItem>
        <Tooltip label="설명 섹션을 추가합니다.">
          <Button
            variant="text"
            onClick={() => app.addSection(DESC_TEMPLATE_TYPE)}
          >
            Desc
          </Button>
        </Tooltip>
      </Styled.TemplateItem>

      <Styled.TemplateItem>
        <Tooltip label="카드 섹션을 추가합니다.">
          <Button
            variant="text"
            onClick={() => app.addSection(CARD_TEMPLATE_TYPE)}
          >
            Card
          </Button>
        </Tooltip>
      </Styled.TemplateItem>
    </Styled.TemplateList>
  );
};
