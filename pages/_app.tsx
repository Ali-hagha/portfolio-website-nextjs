import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
      <Script
        strategy="afterInteractive"
        src="https://analytics-test.liara.run/tracker.js"
        data-ackee-server="https://analytics-test.liara.run"
        data-ackee-domain-id="2c96a2f8-2cce-43bc-a315-a5a1ae4acaea"
      />
    </>
  );
}
