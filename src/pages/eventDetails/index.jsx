import React from 'react'
import { eventsImg } from '../../assets'
import GridEventDetails from '../../components/gridEventDetails'
import { useLocation } from 'react-router-dom'

const EventDetails = () => {
  const location = useLocation()
  const eventDetails = location.state

  return (
    <><div className='m-9 p-4 h-20 flex shadow-2xl rounded justify-around place-content-center '>
            <img src={eventDetails.img} alt="flyerImage"  />

      <div className='flex-col w-[40%]'>
        <h1 className='text-center font-bold '>{eventDetails.eventName}</h1>
        <div className='flex justify-between text-[#5C6471 font-semibold'>
          <p>{eventDetails.date}</p>
          <p>{eventDetails.price}</p>
        </div>
      </div>
      <button className='rounded-[12px] outline-double w-20 h-8 justify-center bg-yellow-500 hover:bg-yellow-700 '>Get Tickect</button>

    </div><div>
    <GridEventDetails events={[eventDetails]} /> 
      </div></>
    
  )
}

export default EventDetails