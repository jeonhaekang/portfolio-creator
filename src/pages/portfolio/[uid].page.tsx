import { DESC_TEMPLATE_TYPE, DescSection, MainSection } from "~/components";
import { usePortfolio } from "./Portfolio.hooks";

const Portfolio = () => {
  const app = usePortfolio();

  if (!app.portfolio) {
    return null;
  }

  return (
    <>
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
