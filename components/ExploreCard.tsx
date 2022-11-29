import Image from "next/image";

import { Explore } from "@/types";

const ExploreCard = ({ img, location, distance }: Explore) => {
  return (
    <div
      className="flex items-center m-2 mt-5 space-x-4 rounded-xl pointer
    hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out"
    >
      {/* Left */}
      <div className="relative w-16 h-16">
        <Image
          className="rounded-lg"
          src={img}
          alt={`explore - ${location}`}
          fill
        />
      </div>

      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default ExploreCard;
