import { useCallback } from "react";
import { useCreateContext } from "~/pages/create/index.page";
import { ControllerProps } from "./Controller.types";

export const useController = ({ id }: ControllerProps) => {
  const { setSections, requestRender } = useCreateContext();

  const onUpHandler = useCallback(() => {
    setSections(sections => {
      const _sections = [...sections];

      const idx = _sections.findIndex(section => section.id === id);

      if (idx > 0) {
        [_sections[idx - 1], _sections[idx]] = [
          _sections[idx],
          _sections[idx - 1]
        ];
      }

      return _sections;
    });

    requestRender();
  }, [id, requestRender, setSections]);

  const onDownHandler = useCallback(() => {
    setSections(sections => {
      const _sections = [...sections];

      const idx = _sections.findIndex(section => section.id === id);

      if (idx < sections.length - 1) {
        [_sections[idx + 1], _sections[idx]] = [
          _sections[idx],
          _sections[idx + 1]
        ];
      }

      return _sections;
    });

    requestRender();
  }, [id, requestRender, setSections]);

  return {
    onUpHandler,
    onDownHandler
  };
};
