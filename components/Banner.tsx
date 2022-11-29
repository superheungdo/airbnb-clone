import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        alt="banner"
        fill
        style={{
          objectFit: "cover",
        }}
      />

      <div className="absolute bottom-1/2 translate-y-1/2 w-full text-center">
        <p className="text-sm md:text-lg">Not sure where to go? Perfect!</p>

        <button
          className="text-purple-500 bg-white font-bold px-10 py-4 my-3 ball
                    shadow-md hover:shadow-xl active:scale-90 transition"
        >
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
