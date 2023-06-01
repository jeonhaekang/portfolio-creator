import { Button, Tooltip } from "@sun-river/components";
import { IoChevronDown, IoChevronUp, IoClose } from "react-icons/io5";
import { useOrderController } from "./OrderController.hooks";
import * as Styled from "./OrderController.styles";
import { OrderControllerProps } from "./OrderController.types";

export const OrderController = (props: OrderControllerProps) => {
  const app = useOrderController(props);

  return (
    <Styled.Controller>
      <Tooltip label="섹션 순서를 상단으로 변경합니다." direction="top">
        <Button variant="text" size="medium" onClick={app.onUpHandler}>
          <IoChevronUp />
        </Button>
      </Tooltip>

      <Tooltip label="섹션 순서를 하단으로 변경합니다." direction="top">
        <Button variant="text" size="medium" onClick={app.onDownHandler}>
          <IoChevronDown />
        </Button>
      </Tooltip>

      <Tooltip label="섹션을 삭제합니다." direction="top">
        <Button variant="text" size="medium" onClick={app.onRemoveHandler}>
          <IoClose cursor="pointer" />
        </Button>
      </Tooltip>
    </Styled.Controller>
  );
};
