import { DESC_TEMPLATE_TYPE, DescSection, MainSection } from "~/components";
import { usePortfolio } from "./Portfolio.hooks";

const Portfolio = () => {
  const app = usePortfolio();

  if (!app.portfolio) {
    return null;
  }

  return (
    <>
      {app.portfolio.sections.map(({ type, id, bgColor, data }) => {
        const attributes = {
          key: id,
          id,
          bgColor
        };

        switch (type) {
          case DESC_TEMPLATE_TYPE:
            return <DescSection {...attributes} {...data} />;
          default:
            return <MainSection {...attributes} {...data} />;
        }
      })}
    </>
  );
};

export default Portfolio;
