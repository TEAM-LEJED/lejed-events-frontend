import React from 'react'
import CategoriesCard from '../../../components/categoriesCard'
import eventFlyerImage from '../../../assets/images/eventImg.jpg'
import NavLinks from '../../../components/navLinks'
import { useNavigate } from 'react-router-dom'
import k from '../../../constants'
const Categories = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-row justify-center bg-[#9A9C95].
     py-[50px]">
      <div className="grid grid-cols-3 gap-4">
        {/* <NavLinks/> */}

        {
          k.EVENTS.map((event, index) => {
            return <CategoriesCard
              img={event.img}
              eventName={event.eventName}
              location={event.location}
              date={event.date}
              price={event.price}
              onClick={() => navigate(`/event-details/${event.id}`, {state: event})}
            />
          })
        }
      </div>
    </div>
  )
}

export default Categories