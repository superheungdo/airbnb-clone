import Image from "next/image";

import { Live } from "@/types";

const LiveCard = ({ img, title }: Live) => {
  return (
    <div className="pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative w-80 h-80">
        <Image className="rounded-xl" src={img} alt={title} fill />
      </div>

      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default LiveCard;
