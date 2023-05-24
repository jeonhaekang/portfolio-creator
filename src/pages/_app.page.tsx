import { DialogProvider, ResetCSS } from "@sun-river/components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useAccount } from "~/state/client/account";
import { observeLoginState } from "~/state/server/account";
import { GlobalCSS } from "~/styles";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const setUserState = useAccount(state => state.setState);

  useEffect(() => {
    observeLoginState(user => setUserState(user ? "member" : "guest"));
  }, [setUserState]);

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
