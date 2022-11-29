import Head from "next/head";

import { Header } from "@/components";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="This is airbnb website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
};

export default Home;
