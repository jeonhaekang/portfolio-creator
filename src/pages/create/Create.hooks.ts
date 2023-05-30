/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { useCallback, useMemo, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { MAIN_TEMPLATE_INIT, MAIN_TEMPLATE_TYPE } from "~/components";
import { uploadFile } from "~/state/server/file";
import { Section } from "./Create.types";

export const useCreate = () => {
  const [, setRenderHash] = useState("");

  const sections = useRef<Section[]>([
    {
      id: uuid(),
      bgColor: "coral",
      type: MAIN_TEMPLATE_TYPE,
      data: MAIN_TEMPLATE_INIT
    }
  ]);

  const setSections = useCallback(
    (callback: (_sections: Section[]) => typeof _sections) => {
      const __sections = callback(sections.current);

      sections.current = __sections;
    },
    []
  );

  const requestRender = useCallback(() => {
    setRenderHash(JSON.stringify(sections.current));
  }, []);

  const fileUpload = useCallback(async (obj: Record<string, any>) => {
    const entries = Object.entries(obj);

    const result = await entries.reduce(async (acc, [key, value]) => {
      const _acc = await acc;

      if (value instanceof File) {
        const downloadUrl = await uploadFile({ file: value, route: "images" });

        _acc[key] = downloadUrl;
      } else if (typeof value === "object" && value !== null) {
        _acc[key] = await fileUpload(value);
      } else {
        _acc[key] = value;
      }

      return _acc;
    }, Promise.resolve({} as typeof obj));

    return result;
  }, []);

  const requestUpload = useCallback(async () => {
    const updated = await Promise.all(
      sections.current.map(section => fileUpload(section))
    );

    console.log(updated);
  }, [fileUpload]);

  const values = useMemo(
    () => ({
      setSections,
      requestRender
    }),
    [requestRender, setSections]
  );

  return { values, sections, setSections, requestUpload };
};
