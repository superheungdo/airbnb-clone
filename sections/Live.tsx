import { Live as LiveType } from "@/types";
import { LiveCard } from "@/components";

interface Props {
  lives: LiveType[];
}

const Live = ({ lives }: Props) => {
  return (
    <section>
      <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

      <div className="flex space-x-4 overflow-scroll px-3 py-4 -ml-3 scrollbar-hide">
        {lives.map((live) => (
          <LiveCard key={live.img} {...live} />
        ))}
      </div>
    </section>
  );
};

export default Live;
