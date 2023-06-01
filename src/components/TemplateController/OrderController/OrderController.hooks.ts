import { useDialog } from "@sun-river/components";
import _ from "lodash";
import { useCallback } from "react";
import { useCreateContext } from "~/pages/create/index.page";
import { OrderControllerProps } from "./OrderController.types";

export const useOrderController = ({ id }: OrderControllerProps) => {
  const { alert } = useDialog();
  const { setPortfolioSections, requestRender } = useCreateContext();

  const onUpHandler = useCallback(() => {
    setPortfolioSections(sections => {
      const _sections = _.cloneDeep(sections);

      const idx = sections.findIndex(section => section.id === id);

      if (idx > 0) {
        [_sections[idx - 1], _sections[idx]] = [
          _sections[idx],
          _sections[idx - 1]
        ];
      }

      return _sections;
    });

    requestRender();
  }, [id, requestRender, setPortfolioSections]);

  const onDownHandler = useCallback(() => {
    setPortfolioSections(sections => {
      const _sections = _.cloneDeep(sections);

      const idx = sections.findIndex(section => section.id === id);

      if (idx < _sections.length - 1) {
        [_sections[idx + 1], _sections[idx]] = [
          _sections[idx],
          _sections[idx + 1]
        ];
      }

      return _sections;
    });

    requestRender();
  }, [id, requestRender, setPortfolioSections]);

  const onRemoveHandler = useCallback(() => {
    setPortfolioSections(sections => {
      const _sections = _.cloneDeep(sections);

      if (_sections.length <= 1) {
        alert({ message: "최소 1개 이상의 섹션이 있어야 합니다." });

        return _sections;
      }
      const removedSections = _sections.filter(section => section.id !== id);

      return removedSections;
    });

    requestRender();
  }, [alert, id, requestRender, setPortfolioSections]);

  return {
    onUpHandler,
    onDownHandler,
    onRemoveHandler
  };
};
