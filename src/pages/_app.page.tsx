import { DialogProvider, ResetCSS } from "@sun-river/components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { AccountProvider } from "~/layouts";
import { GlobalCSS } from "~/styles";
import "../styles/font-face.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DialogProvider>
        <AccountProvider>
          <ResetCSS />
          <GlobalCSS />
          <Component {...pageProps} />
        </AccountProvider>
      </DialogProvider>
    </QueryClientProvider>
  );
}
