import { Explore as ExploreType } from "@/types";
import { ExploreCard } from "@/components";

interface Props {
  explores: ExploreType[];
}

const Explore = ({ explores }: Props) => {
  return (
    <section className="pt-6">
      <h2 className="text-xl font-semibold pb-5">Explore Nearby</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {explores.map((explore) => (
          <ExploreCard key={explore.img} {...explore} />
        ))}
      </div>
    </section>
  );
};

export default Explore;
