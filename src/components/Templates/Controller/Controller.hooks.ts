import { useDialog } from "@sun-river/components";
import _ from "lodash";
import { useCallback } from "react";
import { useCreateContext } from "~/pages/create/index.page";
import { ControllerProps } from "./Controller.types";

export const useController = ({ id }: ControllerProps) => {
  const { alert } = useDialog();
  const { setPortfolio, requestRender } = useCreateContext();

  const onUpHandler = useCallback(() => {
    setPortfolio(portfolio => {
      const _portfolio = _.cloneDeep(portfolio);
      const _sections = _portfolio.sections;

      const idx = _sections.findIndex(section => section.id === id);

      if (idx > 0) {
        [_sections[idx - 1], _sections[idx]] = [
          _sections[idx],
          _sections[idx - 1]
        ];
      }

      return _portfolio;
    });

    requestRender();
  }, [id, requestRender, setPortfolio]);

  const onDownHandler = useCallback(() => {
    setPortfolio(portfolio => {
      const _portfolio = _.cloneDeep(portfolio);
      const _sections = _portfolio.sections;

      const idx = _sections.findIndex(section => section.id === id);

      if (idx < _sections.length - 1) {
        [_sections[idx + 1], _sections[idx]] = [
          _sections[idx],
          _sections[idx + 1]
        ];
      }

      return _portfolio;
    });

    requestRender();
  }, [id, requestRender, setPortfolio]);

  const onRemoveHandler = useCallback(() => {
    setPortfolio(portfolio => {
      const _portfolio = _.cloneDeep(portfolio);
      const _sections = _portfolio.sections;

      if (_sections.length <= 1) {
        alert({ message: "최소 1개 이상의 섹션이 있어야 합니다." });
      } else {
        _portfolio.sections = _sections.filter(section => section.id !== id);
      }

      return _portfolio;
    });

    requestRender();
  }, [alert, id, requestRender, setPortfolio]);

  return {
    onUpHandler,
    onDownHandler,
    onRemoveHandler
  };
};
