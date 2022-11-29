import Image from "next/image";

const Outdoor = () => {
  return (
    <section className="relative py-16 pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          className="rounded-2xl"
          src="https://links.papareact.com/4cj"
          alt="The Grestest Outdoors"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">The Grestest Outdoors</h3>
        <p>Wishlists created by Airbnb</p>

        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          Get Inspired
        </button>
      </div>
    </section>
  );
};

export default Outdoor;
