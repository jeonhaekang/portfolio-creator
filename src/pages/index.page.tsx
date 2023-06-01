import { Typography } from "@sun-river/components";
import { MainHeader, Section } from "~/components";

export default function Home() {
  return (
    <>
      <MainHeader />

      <Section full center>
        <Typography size="display1" color="white" shadow="drop3">
          PortfolioCreator
        </Typography>
      </Section>
    </>
  );
}
