import "../styles/globals.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Header, Footer } from "@/components";

const App = ({ Component, pageProps }: AppProps) => {
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
