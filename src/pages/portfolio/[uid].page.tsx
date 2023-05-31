import {
  DESC_TEMPLATE_TYPE,
  DescSection,
  MainSection,
  PortfolioHeader
} from "~/components";
import { usePortfolio } from "./Portfolio.hooks";

const Portfolio = () => {
  const app = usePortfolio();

  console.log(app.portfolio);

  if (!app.portfolio) {
    return null;
  }

  return (
    <>
      <PortfolioHeader {...app.portfolio.header} />

      {app.portfolio.sections.map(({ type, data, ...props }) => {
        switch (type) {
          case DESC_TEMPLATE_TYPE:
            return <DescSection key={props.id} {...data} {...props} />;
          default:
            return <MainSection key={props.id} {...data} {...props} />;
        }
      })}
    </>
  );
};

export default Portfolio;
