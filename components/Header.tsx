import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { DateRangePicker, RangeKeyDict, Range } from "react-date-range";

const initialSelectionRange: Range = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const Header = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [numOfGuests, setNumOfGuests] = useState<number>(1);
  const [selectionRange, setSelectionRange] = useState<Range>(
    initialSelectionRange
  );

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchInput(e.target.value);

  const handleNumOfGuests = (e: ChangeEvent<HTMLInputElement>) =>
    setNumOfGuests(parseInt(e.target.value));

  const handleSelect = (ranges: RangeKeyDict) => {
    const { selection } = ranges;

    setSelectionRange(selection);
  };

  const resetInput = () => {
    setSearchInput("");
    setNumOfGuests(1);
    setSelectionRange(initialSelectionRange);
  };

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
          value={searchInput}
          onChange={handleSearchInput}
          placeholder="Start your search"
        />
        <AiOutlineSearch className="hidden md:inline-flex flex-shrink-0 bg-primary text-white text-[32px] p-2 ball pointer" />
      </div>

      {/* Right */}
      <div className="flex justify-end items-center space-x-2 lg:space-x-4 text-gray-500">
        <div className="flex-center space-x-2 pointer">
          <p className="hidden md:inline text-sm lg:text-base">Become a host</p>
          <BsGlobe className="header-icon" />
        </div>

        <div className="flex space-x-2 border-2 p-2 ball">
          <AiOutlineMenu className="header-icon" />
          <FaUserCircle className="header-icon" />
        </div>
      </div>

      {/* Date & Guests */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={new Date()}
            rangeColors={["#FD5861"]}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <HiUsers className="text-[20px]" />
            <input
              className="w-12 ml-1 text-lg text-center text-primary"
              type="number"
              value={numOfGuests}
              onChange={handleNumOfGuests}
              min={1}
            />
          </div>

          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow text-primary">Search</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
