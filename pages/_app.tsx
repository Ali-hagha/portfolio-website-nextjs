import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        defer
        strategy="afterInteractive"
        data-domain="alihaghayegh.ir"
        src="https://analytics.alihaghayegh.ir/js/script.js"
      />
    </>
  );
}
