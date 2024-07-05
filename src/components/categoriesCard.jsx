import { Star } from 'lucide-react';
import React from 'react';



const CategoriesCard = ({ img, eventName, location, date, price, description, onClick }) => {


  return (

    <div className="relative rounded-[10px] shadow-lg  overflow-hidden" onClick={onClick}>
      <div className="absolute top-2 right-2 bg-white-500 rounded-[7px] flex justify-center items-center">
        <Star className="text-white h-5 w-5" />
      </div>

      <div >
        <img src={img} alt={eventName} className="w-72 h-[300px] object-cover" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end bg-white bg-opacity-100 text-black p-4">
          <div className="px-4 pb-2">
            <p className="text-l font-semibold">{eventName}</p>
            <p className="text-sm">{location}</p>
          </div>
          <div className="flex justify-between px-4">
            <p className="text-sm">{new Date(date).toLocaleDateString()}</p>
            <p className="text-sm font-bold">{price == 0 ? "Free" : `GHS ${price}`}</p>
            {/* <h3 className="text-sm">{description}</h3> */}


          </div>
        </div>
      </div>

    </div>
  );
};

export default CategoriesCard;
