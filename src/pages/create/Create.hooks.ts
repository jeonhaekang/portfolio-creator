/* eslint-disable consistent-return */
import { useDialog } from "@sun-river/components";
import deepCopy from "lodash/cloneDeep";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { MAIN_TEMPLATE_INIT, MAIN_TEMPLATE_TYPE } from "~/components";
import { DEFAULT_HEADER_TITLE } from "~/components/Headers/CreateHeader";
import { useFileUpload } from "~/hooks";
import { useAccount } from "~/layouts";
import { useCreatePortfolio } from "~/state/server/portfolio/mutations";
import { useGetPortfolio } from "~/state/server/portfolio/queries";
import { Portfolio, PortfolioSection } from "~/types/Portfolio";

export const useCreate = () => {
  const { alert, confirm } = useDialog();
  const { replace } = useRouter();
  const { upload } = useFileUpload();
  const { user, isLogin } = useAccount();

  const [, setRenderHash] = useState("");

  const portfolio = useRef<Portfolio>({
    header: {
      title: DEFAULT_HEADER_TITLE
    },
    sections: [
      {
        id: uuid(),
        type: MAIN_TEMPLATE_TYPE,
        data: MAIN_TEMPLATE_INIT
      }
    ]
  });

  const savedPortfolio = useGetPortfolio(user?.uid || "");

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

  const setPortfolioSections = useCallback(
    (callback: (__section: Portfolio["sections"]) => typeof __section) => {
      const _sections = callback(portfolio.current.sections);

      portfolio.current.sections = _sections;
    },
    []
  );

  const setPortfolioHeader = useCallback(
    (callback: (__header: Portfolio["header"]) => typeof __header) => {
      const _header = callback(portfolio.current.header);

      portfolio.current.header = _header;
    },
    []
  );

  const requestRender = useCallback(() => {
    setRenderHash(JSON.stringify(portfolio.current));
  }, []);

  const onChangeSection = useCallback(
    (id: string, data: PortfolioSection["data"]) => {
      setPortfolio(portfolio => {
        const _portfolio = deepCopy(portfolio);

        _portfolio.sections = _portfolio.sections.map(section =>
          section.id === id ? { ...section, data } : section
        ) as PortfolioSection[];

        return _portfolio;
      });
    },
    [setPortfolio]
  );

  const requestCreatePortfolio = useCallback(async () => {
    const uploadedPortfolio = await upload(portfolio.current);

    createPortfolio.mutate(uploadedPortfolio as Portfolio);
  }, [createPortfolio, upload]);

  const savedPortfolioCheck = useCallback(async () => {
    if (!savedPortfolio.data) {
      return false;
    }

    if (
      await confirm({
        message: "이미 작성한 포트폴리오가 존재합니다. 불러오시겠습니까?",
        confirmLabel: "복원",
        cancelLabel: "무시"
      })
    ) {
      portfolio.current = savedPortfolio.data;

      requestRender();
    }
  }, [confirm, requestRender, savedPortfolio.data]);

  useEffect(() => {
    savedPortfolioCheck();
  }, [savedPortfolioCheck]);

  const values = useMemo(
    () => ({
      getPortfolio,
      setPortfolio,
      setPortfolioSections,
      setPortfolioHeader,
      requestRender
    }),
    [
      getPortfolio,
      requestRender,
      setPortfolio,
      setPortfolioHeader,
      setPortfolioSections
    ]
  );

  return {
    values,
    portfolio,
    requestCreatePortfolio,
    onChangeSection
  };
};
