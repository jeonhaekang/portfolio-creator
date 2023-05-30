import { useDialog } from "@sun-river/components";
import { useRouter } from "next/router";
import { useCallback, useMemo, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { MAIN_TEMPLATE_INIT, MAIN_TEMPLATE_TYPE } from "~/components";
import { uploadFile } from "~/state/server/file";
import { useCreatePortfolio } from "~/state/server/portfolio/mutations";
import { PortfolioSection } from "~/types/Portfolio";

export const useCreate = () => {
  const { alert } = useDialog();
  const { replace } = useRouter();

  const portfolio = useCreatePortfolio({
    onSuccess: async () => {
      await alert({ message: "포트폴리오 생성에 성공하였습니다 !!" });

      replace("/");
    },
    onError: () => {
      alert({ message: "포트폴리오 생성에 실패하였습니다." });
    }
  });

  const [, setRenderHash] = useState("");

  const sections = useRef<PortfolioSection[]>([
    {
      id: uuid(),
      bgColor: "coral",
      type: MAIN_TEMPLATE_TYPE,
      data: MAIN_TEMPLATE_INIT
    }
  ]);

  const setSections = useCallback(
    (callback: (_sections: PortfolioSection[]) => typeof _sections) => {
      const __sections = callback(sections.current);

      sections.current = __sections;
    },
    []
  );

  const requestRender = useCallback(() => {
    setRenderHash(JSON.stringify(sections.current));
  }, []);

  const getTemplateAttributes = useCallback(
    (id: string) => ({
      key: id,
      id,
      onChange: (formData: PortfolioSection["data"]) => {
        setSections(
          prev =>
            prev.map(section =>
              section.id === id ? { ...section, data: formData } : section
            ) as PortfolioSection[]
        );
      }
    }),
    [setSections]
  );

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

  const createPortfolio = useCallback(async () => {
    const updated = (await Promise.all(
      sections.current.map(section => fileUpload(section))
    )) as PortfolioSection[];

    portfolio.mutate(updated);
  }, [fileUpload, portfolio]);

  const values = useMemo(
    () => ({
      setSections,
      requestRender
    }),
    [requestRender, setSections]
  );

  return {
    values,
    sections,
    setSections,
    createPortfolio,
    getTemplateAttributes
  };
};
