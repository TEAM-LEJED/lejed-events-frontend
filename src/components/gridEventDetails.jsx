import React from 'react';
import SocialMedia from './socialMedia';
import EventHost from './eventHost';
import EvenDescription from './evenDescription';
const GridEventDetails = ({ eventDetails }) => {

  return (
    <div className="grid grid-rows-5 grid-flow-col justify-center h-screen gap-8">
      <div className="row-span-2 w-[60rem]">
        {/* Displaying image */}
        <img src={`https://savefiles.org/${eventDetails.flier}?shareable_link=250`} alt="flyerImage" className='size-96 h-80 w-96'/>
      </div>
      {/* <div className="row-span-2 w-[60rem] bg-orange-200">
        <EvenDescription/>
      </div> */}
      <div className="row-span-2 bg-[#E5CFDA] flex items-center justify-center text-center text-white font-bold">
        {/* Spread to social media */}
        <SocialMedia/>
      </div>
      <div className="row-span-2 col-span-2 bg-[#E5CFDA] flex items-center justify-center text-center text-white font-bold">
        {/* Placeholder for additional details, e.g., event description */}
      <EventHost/>
      </div>
      
    </div>
  );
};

export default GridEventDetails;
