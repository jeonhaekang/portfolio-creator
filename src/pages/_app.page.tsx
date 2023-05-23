import { DialogProvider, ResetCSS } from "@sun-river/components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { GlobalCSS } from "~/styles";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DialogProvider>
        <ResetCSS />
        <GlobalCSS />
        <Component {...pageProps} />
      </DialogProvider>
    </QueryClientProvider>
  );
}
