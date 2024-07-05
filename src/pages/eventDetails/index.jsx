import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GridEventDetails from '../../components/gridEventDetails'


const EventDetails = () => {
  const location = useLocation();
  const eventDetails = location.state;
  console.log(eventDetails)

  if (!eventDetails) {
    return <div>Loading...</div>; // eventDetails is not available yet
  }

  return (
    <>
      <div className='m-9 p-4 h-20 flex shadow-2xl rounded justify-around place-content-center'>
        <img src={`https://savefiles.org/${eventDetails.flier}?shareable_link=250`} alt="flyerImage" />

        <div className='flex-col w-[40%]'>
          <h1 className='text-center font-bold'>{eventDetails.name}</h1>
          <div className='flex justify-between text-[#5C6471] font-semibold'>
            <p>{eventDetails.date}</p>
            <p>{eventDetails.price}</p>
          </div>
        </div>
        <button className='rounded-[12px] outline-double w-20 h-8 justify-center bg-[#F5A3CC] hover:bg-white'>Get Ticket</button>
      </div>
      <div>
        <GridEventDetails eventDetails={eventDetails} />
      </div>
    </>
  );
};

export default EventDetails;
