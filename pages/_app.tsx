import "../styles/globals.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import ProgressBar from "@badrap/bar-of-progress";

import { colors } from "@/constants";
import { Header, Footer } from "@/components";

const progress = new ProgressBar({
  size: 4,
  color: colors.primary,
  className: "z-50",
});

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", progress.start);
    router.events.on("routeChangeComplete", progress.finish);
    router.events.on("routeChangeError", progress.finish);

    return () => {
      router.events.off("routeChangeStart", progress.start);
      router.events.off("routeChangeComplete", progress.finish);
      router.events.off("routeChangeError", progress.finish);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="This is airbnb website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
