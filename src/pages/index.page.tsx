import { Typography } from "@sun-river/components";
import { MainHeader } from "~/components";
import { Section } from "~/components/Section";

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
