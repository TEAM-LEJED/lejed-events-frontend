import React from 'react'
import CategoriesCard from '../../../components/categoriesCard'
import eventFlyerImage from '../../../assets/images/eventImg.jpg'
import NavLinks from '../../../components/navLinks'
const Categories = () => {
  return (
    <div className="flex flex-row justify-center bg-[#9A9C95].
     py-[50px]">
    <div className="grid grid-cols-3 gap-4">
    <NavLinks/>

      <CategoriesCard
        img={eventFlyerImage}
        eventName="Event Name 1"
        location="East Legon"
        date="date"
        price="Free"
      />
    <CategoriesCard
      img={eventFlyerImage}
      eventName="Event Names"
      location="East Legon"
      date="today"
      price="free"
    />
    <CategoriesCard
      eventName="Event Names"
      location="East Legon"
      date="today"
      price="free"
    />
    <CategoriesCard
      eventName="Event Names"
      location="East Legon"
      date="today"
      price="free"
    />
    <CategoriesCard
      eventName="Event Names"
      location="East Legon"
      date="today"
      price="free"
    />
    </div>
    </div>
  )
}

export default Categories