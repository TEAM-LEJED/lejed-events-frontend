import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CategoriesCard from '../../../components/categoriesCard';

const Events = () => {
    //Define a state to store events 
    const [events, setEvents] = useState([]);

    const getEvents = async () => {
      const response = await axios.get('https://lejed-events-backend-2.onrender.com/events')
      if (response.status === 200) {
        setEvents(response.data);
  
      } else {
        setEvents([]);
      }
    }
  
    //Get Events 
    useEffect(() => {
      getEvents();
    },[]);
  return (
<div className="flex flex-row justify-center 
     py-[50px]">
      <div className="grid grid-cols-3 gap-10">

        {
          events.map((event, index) => {
            return <CategoriesCard
              img={`https://savefiles.org/${event.flier}?shareable_link=250`}
              eventName={event.name}
              location={event.location}
              date={event.date}
              price={event.price}
              description={event.description}
              onClick={() => navigate(`/event-details/${event.id}`, { state: event })}
            />
          })
        }
      </div>
    </div>  )
}

export default Events    
