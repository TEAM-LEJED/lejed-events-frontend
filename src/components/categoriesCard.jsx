import { Star } from 'lucide-react';
import React from 'react';
import NavLinks from './navLinks';


 

const CategoriesCard = ({ img, eventName, location, date, price }) => {
  return (

    <div className="relative rounded-[10px] shadow-2xl  overflow-hidden">
      <div className="absolute top-2 right-2 bg-white-500 rounded-[7px] flex justify-center items-center">
        <Star className="text-white h-5 w-5" />
      </div>

      <div className="relative">
        <img src={img} alt={eventName} className="w-full h-[300px] object-cover" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end bg-white bg-opacity-100 text-black">
          <div className="px-4 pb-2">
            <p className="text-l font-semibold">{eventName}</p>
            <p className="text-sm">{location}</p>
          </div>
          <div className="flex justify-between px-4">
            <p className="text-sm">{date}</p>
            <p className="text-sm">{price}</p>
          </div>
x        </div>
      </div>

    </div>
  );
};

export default CategoriesCard;
