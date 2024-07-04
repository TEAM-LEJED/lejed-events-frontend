import React from 'react';
import { fbIcon, twitterIcon, whatsappIcon } from '../assets';
import SocialMedia from './socialMedia';
import EventHost from './eventHost';
import EvenDescription from './evenDescription';
const GridEventDetails = ({ events }) => {
  // Assuming events is an array, even if it's just one event in this case
  const event = events[0]; // Take the first event (assuming only one for simplicity)

  return (
    <div className="grid grid-rows-4 grid-flow-col justify-center h-screen gap-8">
      <div className="row-span-4 w-[60rem] bg-gray-200">
        {/* Displaying image */}
        <img src={event.img} alt="Event Flyer" className="w-full h-full object-cover" />
        <EvenDescription/>
      </div>
      <div className="col-span-2 bg-gray-300 flex items-center justify-center text-center text-white font-bold">
        {/* Spread to social media */}
        <SocialMedia/>
      </div>
      <div className="row-span-2 col-span-2 bg-gray-300 flex items-center justify-center text-center text-white font-bold">
        {/* Placeholder for additional details, e.g., event description */}
      <EventHost/>
      </div>
      
    </div>
  );
};

export default GridEventDetails;
