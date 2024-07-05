import React from 'react';
import { heroImg } from '../../../assets';
import { Search } from 'lucide-react';
import DateRange from '../../../components/dateRange';

const Hero = () => {
  return (
    <div className="relative">
      <img
        src={heroImg}
        alt="Hero Bg Image"
        className=" w-full  "
      />
      <div className="absolute m-0 inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl font-bold text-pink-500 mb-4">Live.</h1>
        <h1 className="text-5xl mb-8">Don't Just Exist. <br /> Discover The Most Happening Events Around You</h1>

        <div className="flex items-center justify-center">
          <div className="relative">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="flex items-center">
              <span className="absolute inset-y-0 left-4 flex items-center">
                <Search className="text-black h-6 w-6" />
              </span>
              <input
                id="search"
                placeholder="Search for an event"
                type="text"
                name="search"
                className="pl-10 pr-4 border rounded-lg text-black border-gray-300 focus:outline-none focus:border-pink-500 h-12 w-80"
              />
              <div className="ml-4">
                <DateRange />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
