import Head from "next/head";

import { Explore as ExploreType } from "@/types";

import { Explore } from "@/sections";
import { Header, Banner } from "@/components";

interface Props {
  explores: ExploreType[];
}

const Home = ({ explores }: Props) => {
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
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const explores = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  return {
    props: {
      explores,
    },
  };
};
