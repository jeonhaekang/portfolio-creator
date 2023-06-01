import {
  CARD_TEMPLATE_TYPE,
  CardSection,
  DESC_TEMPLATE_TYPE,
  DescSection,
  PortfolioHeader
} from "~/components";
import { MainViewer } from "~/components/Template";
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
            return <DescSection key={props.id} {...data} {...props} />;
          case CARD_TEMPLATE_TYPE:
            return <CardSection key={props.id} {...data} {...props} />;
          default:
            return (
              <MainViewer key={props.id} {...props} type={type} data={data} />
            );
        }
      })}
    </>
  );
};

export default Portfolio;
