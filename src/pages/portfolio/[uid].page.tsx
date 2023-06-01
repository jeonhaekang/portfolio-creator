import {
  CARD_TEMPLATE_TYPE,
  DESC_TEMPLATE_TYPE,
  PortfolioHeader
} from "~/components";
import { CardViewer, DescViewer, MainViewer } from "~/components/Template";
import { usePortfolio } from "./Portfolio.hooks";

const Portfolio = () => {
  const app = usePortfolio();

  if (!app.portfolio) {
    return null;
  }

  return (
    <>
      <PortfolioHeader {...app.portfolio.header} />

      {app.portfolio.sections.map(({ type, data, ...props }) => {
        switch (type) {
          case DESC_TEMPLATE_TYPE:
            return <DescViewer key={props.id} {...props} data={data} />;
          case CARD_TEMPLATE_TYPE:
            return <CardViewer key={props.id} {...props} data={data} />;
          default:
            return <MainViewer key={props.id} {...props} data={data} />;
        }
      })}
    </>
  );
};

export default Portfolio;
