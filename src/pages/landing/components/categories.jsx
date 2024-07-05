import React, { useEffect, useState } from 'react'
import CategoriesCard from '../../../components/categoriesCard'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Categories = () => {
  const navigate = useNavigate()
  //Define a state to store events 
  const [events, setEvents] = useState([]);

  //Define a function to fetch events
  const getEvents = async () => {
    const response = await axios.get('https://lejed-events-backend-4.onrender.com/events')
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
    <div className="flex flex-row justify-center bg-[#E5CFDA] py-[50px]">
      <div className="grid grid-cols-3 gap-4">

        {
          events.map((event, index) => {
            return <CategoriesCard
            key={index}
            img={`https://savefiles.org/${event.flier}?shareable_link=250`}
            eventName={event.name}
              location={event.location}
              date={event.date}
              price={event.price}
              description={event.description}
              onClick={() => navigate(`/event-details/${event.id}`,{state: event })}
            />
          })
        }
      </div>
    </div>
  )
}

export default Categories