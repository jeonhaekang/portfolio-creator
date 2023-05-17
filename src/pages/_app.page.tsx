import { ResetCSS } from "@sun-river/components";
import type { AppProps } from "next/app";
import { GlobalCSS } from "~/styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResetCSS />
      <GlobalCSS />
      <Component {...pageProps} />
    </>
  );
}
