import { useRouter } from "next/router";

import { Search } from "@/types";
import { SearchCard } from "@/components";

interface Props {
  searchs: Search[];
}

const Search = ({ searchs }: Props) => {
  const router = useRouter();

  const { location, guests, startDate, endDate } = router.query;
  const range = `${startDate} - ${endDate}`;

  return (
    <main className="flex">
      <section className="flex-grow pt-14 px-6">
        <p className="text-sx">
          300+ Stays - {range} - for {guests}{" "}
          {parseInt(guests as string) === 1 ? "guest" : "guests"}
        </p>

        <h1 className="text-3xl font-semibold mt-2 mb-6">
          Stays in <p className="inline-block capitalize">{location}</p>
        </h1>

        <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800">
          <p className="search-option">Cancellation Flexibility</p>
          <p className="search-option">Type of Place</p>
          <p className="search-option">Price</p>
          <p className="search-option">Rooms and Beds</p>
          <p className="search-option">More filters</p>
        </div>

        <div className="flex flex-col">
          {searchs.map((search) => (
            <SearchCard key={search.img} {...search} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Search;

export const getServerSideProps = async () => {
  const searchs = await fetch("https://www.jsonkeeper.com/b/5NPS").then((res) =>
    res.json()
  );

  return {
    props: {
      searchs,
    },
  };
};
