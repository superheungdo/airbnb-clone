import Head from "next/head";

import { Explore as ExploreType, Live as LiveType } from "@/types";

import { Explore, Live, Outdoor } from "@/sections";
import { Header, Banner } from "@/components";

interface Props {
  explores: ExploreType[];
  lives: LiveType[];
}

const Home = ({ explores, lives }: Props) => {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="This is airbnb website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <Explore explores={explores} />
        <Live lives={lives} />
        <Outdoor />
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const explores = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  const lives = await fetch("https://www.jsonkeeper.com/b/VHHT").then((res) =>
    res.json()
  );

  return {
    props: {
      explores,
      lives,
    },
  };
};
