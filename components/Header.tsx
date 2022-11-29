import Image from "next/image";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="sticky top-0 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 z-50">
      {/* Left */}
      <div className="relative flex items-center h-7 lg:h-10 my-auto pointer">
        <Image
          src="https://links.papareact.com/qd3"
          alt="logo"
          fill
          style={{ objectFit: "contain", objectPosition: "left" }}
        />
      </div>

      {/* Center */}
      <div
        className="flex justify-between items-center border-2 ball px-3 md:px-5 py-2
      md:shadow-sm"
      >
        <input
          className="w-full text-center md:text-left md:pr-5 text-sm
          text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <AiOutlineSearch className="hidden md:inline-flex flex-shrink-0 bg-red-500 text-white text-[32px] p-2 ball pointer" />
      </div>

      {/* Right */}
      <div className="flex justify-end items-center space-x-2 lg:space-x-4 text-gray-500">
        <div className="flex-center space-x-2 pointer">
          <p className="hidden md:inline">Become a host</p>
          <BsGlobe className="text-[20px]" />
        </div>

        <div className="flex space-x-2 border-2 p-2 ball">
          <AiOutlineMenu className="text-[20px] pointer" />
          <FaUserCircle className="text-[20px] pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
