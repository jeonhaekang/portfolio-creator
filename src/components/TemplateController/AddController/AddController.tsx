import { Button, Tooltip } from "@sun-river/components";
import {
  CARD_TEMPLATE_TYPE,
  DESC_TEMPLATE_TYPE,
  MAIN_TEMPLATE_TYPE
} from "~/components";
import { useAddController } from "./AddController.hooks";
import * as Styled from "./AddController.styles";

export const AddController = () => {
  const app = useAddController();

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
