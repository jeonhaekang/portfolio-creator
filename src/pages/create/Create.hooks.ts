import { useDialog } from "@sun-river/components";
import deepCopy from "lodash/cloneDeep";
import { useRouter } from "next/router";
import { useCallback, useMemo, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { MAIN_TEMPLATE_INIT, MAIN_TEMPLATE_TYPE } from "~/components";
import { DEFAULT_HEADER_TITLE } from "~/components/Headers/CreateHeader";
import { useFileUpload } from "~/hooks";
import { useCreatePortfolio } from "~/state/server/portfolio/mutations";
import { Portfolio, PortfolioSection } from "~/types/Portfolio";

export const useCreate = () => {
  const { alert } = useDialog();
  const { replace } = useRouter();
  const { upload } = useFileUpload();

  const [, setRenderHash] = useState("");

  const portfolio = useRef<Portfolio>({
    header: {
      title: DEFAULT_HEADER_TITLE
    },
    sections: [
      {
        id: uuid(),
        bgColor: "coral",
        type: MAIN_TEMPLATE_TYPE,
        data: MAIN_TEMPLATE_INIT
      }
    ]
  });

  const createPortfolio = useCreatePortfolio({
    onSuccess: async () => {
      await alert({ message: "포트폴리오 생성에 성공하였습니다 !!" });

      replace("/");
    },
    onError: () => {
      alert({ message: "포트폴리오 생성에 실패하였습니다." });
    }
  });

  const getPortfolio = useCallback(() => portfolio.current, []);

  const setPortfolio = useCallback(
    (callback: (__portfolio: Portfolio) => typeof __portfolio) => {
      const _portfolio = callback(portfolio.current);

      portfolio.current = _portfolio;
    },
    []
  );

  const requestRender = useCallback(() => {
    setRenderHash(JSON.stringify(portfolio.current));
  }, []);

  const getTemplateAttributes = useCallback(
    (id: string) => ({
      key: id,
      id,
      onChange: (formData: PortfolioSection["data"]) => {
        setPortfolio(portfolio => {
          const _portfolio = deepCopy(portfolio);

          _portfolio.sections = _portfolio.sections.map(section =>
            section.id === id ? { ...section, data: formData } : section
          ) as PortfolioSection[];

          return _portfolio;
        });
      }
    }),
    [setPortfolio]
  );

  const requestCreatePortfolio = useCallback(async () => {
    const uploadedPortfolio = await upload(portfolio.current);

    createPortfolio.mutate(uploadedPortfolio as Portfolio);
  }, [createPortfolio, upload]);

  const values = useMemo(
    () => ({
      getPortfolio,
      setPortfolio,
      requestRender
    }),
    [getPortfolio, requestRender, setPortfolio]
  );

  return {
    values,
    portfolio,
    requestCreatePortfolio,
    getTemplateAttributes
  };
};
