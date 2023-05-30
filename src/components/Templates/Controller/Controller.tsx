import { Tooltip } from "@sun-river/components";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useController } from "./Controller.hooks";
import * as Styled from "./Controller.styles";
import { ControllerProps } from "./Controller.types";

export const Controller = (props: ControllerProps) => {
  const app = useController(props);

  return (
    <Tooltip label="섹션 순서를 변경합니다." direction="top" anchor="right">
      <Styled.Controller>
        <IoChevronUp onClick={app.onUpHandler} cursor="pointer" />
        <IoChevronDown onClick={app.onDownHandler} cursor="pointer" />
      </Styled.Controller>
    </Tooltip>
  );
};
