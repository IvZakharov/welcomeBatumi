import "../styles/globals.scss";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { Manrope } from "@next/font/google";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={manrope.className}>
      <NextNProgress
        color="#0065D9"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </main>
  );
}
