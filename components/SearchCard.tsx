import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

import { Search } from "@/types";

interface Props {
  search: Search;
  selected: boolean;
  setSelectedLocation: Dispatch<SetStateAction<Search | null>>;
}

const SearchCard = ({ search, selected, setSelectedLocation }: Props) => {
  const { img, location, title, description, star, price, total } = search;

  return (
    <div
      className={`flex px-2 pr-4 py-7 border-b pointer
    ${selected && "scale-[1.02] shadow-lg"}
    transition duration-200 ease-out first:border-t
    hover:opacity-80 hover:shadow-lg`}
      onClick={() => setSelectedLocation(search)}
    >
      <div className="relative w-40 md:w-80 h-24 md:h-52 flex-shrink-0">
        <Image
          className="rounded-lg md:rounded-2xl"
          src={img}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <AiOutlineHeart className="text-[28px] pointer" />
        </div>

        <h4 className="text-xl">{title}</h4>

        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <AiFillStar className="text-primary text-[20px]" />
            {star}
          </p>

          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-light text-gray-500">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
