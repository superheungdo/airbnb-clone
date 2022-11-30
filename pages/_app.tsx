import "../styles/globals.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
