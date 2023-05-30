import { DialogProvider, ResetCSS } from "@sun-river/components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useAccount } from "~/state/client/account";
import { observeLoginState } from "~/state/server/account";
import { GlobalCSS } from "~/styles";
import "../styles/font-face.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const setUser = useAccount(state => state.setUser);

  useEffect(() => {
    observeLoginState(data =>
      setUser({ type: data ? "member" : "guest", data })
    );
  }, [setUser]);

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
