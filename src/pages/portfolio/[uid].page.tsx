import { MainSection } from "~/components";
import { SECTION_COMPONENT_MAP } from "./Portfolio.constants";
import { usePortfolio } from "./Portfolio.hooks";

const Portfolio = () => {
  const app = usePortfolio();

  if (!app.portfolio) {
    return null;
  }

  return (
    <>
      {app.portfolio.sections.map(({ type, data }) => {
        const Section = SECTION_COMPONENT_MAP[type];

        if (type === "MAIN_TEMPLATE") {
          return <MainSection {...data} />;
        }
        return null;
      })}
    </>
  );
};

export default Portfolio;
