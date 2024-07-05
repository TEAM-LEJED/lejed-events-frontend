import React, { useState, useEffect } from 'react';
import CategoriesCard from '../../components/categoriesCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Events = () => {
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [searchPrice, setSearchPrice] = useState('');

  // Fetch events from API
  const getEvents = async () => {
    try {
      const response = await axios.get('https://lejed-events-backend-2.onrender.com/events');
      if (response.status === 200) {
        setEvents(response.data);
        setFilteredEvents(response.data); // Initialize filteredEvents with all events
      } else {
        setEvents([]);
        setFilteredEvents([]);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  // Function to handle search
  const handleSearch = () => {
    let filtered = events.filter(event => {
      let nameMatch = true;
      let locationMatch = true;
      let priceMatch = true;

      if (searchName.trim() !== '') {
        nameMatch = event.name.toLowerCase().includes(searchName.toLowerCase());
      }

      if (searchLocation.trim() !== '') {
        locationMatch = event.location.toLowerCase().includes(searchLocation.toLowerCase());
      }

      if (searchPrice.trim() !== '') {
        priceMatch = event.price.toString().includes(searchPrice);
      }

      return nameMatch && locationMatch && priceMatch;
    });

    setFilteredEvents(filtered);
  };

  // Function to handle input changes
  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <div>
      {/* Search inputs */}
      <div className="flex justify-center bg-[#E5CFDA] space-x-4 pt-10">
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={e => handleInputChange(e, setSearchName)}
className="rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border[#F5A3CC]"        />
        <input
          type="text"
          placeholder="Search by location"
          value={searchLocation}
          onChange={e => handleInputChange(e, setSearchLocation)}
className="rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border[#F5A3CC]"        />
        <input
          type="text"
          placeholder="Search by price"
          value={searchPrice}
          onChange={e => handleInputChange(e, setSearchPrice)}
className="rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border[#F5A3CC]"        />
        <button
          onClick={handleSearch}
          className=" bg-[#F5A3CC] text-black rounded hover:bg-white px-4 py-2 "
          >
          Search
        </button>
      </div>

      {/* Display filtered events */}
      <div className="flex flex-row justify-center bg-[#E5CFDA] py-[50px]">
        <div className="grid grid-cols-3 gap-4">
          {filteredEvents.map((event, index) => (
            <CategoriesCard
              key={index}
              img={`https://savefiles.org/${event.flier}?shareable_link=250`}
              eventName={event.name}
              location={event.location}
              date={event.date}
              price={event.price}
              onClick={() => navigate(`/event-details/${event.id}`, { state: event })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;


// import React from 'react'
// import CategoriesCard from '../../components/categoriesCard'
// import Categories from '../landing/components/categories'

// const Events = () => {
//   return (
//     <div className='bg-[#E5CFDA]'>
//       <CategoriesCard/>
//       {/* Search inputs */}
//       <div className="flex justify-center space-x-4 mb-4">
//         <input
//           type="text"
//           placeholder="Search by name..."
//           // value={searchName}
//           onChange={e => handleInputChange(e, setSearchName)}
//           className="rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border[#F5A3CC]"        />
//         <input
//           type="text"
//           placeholder="Search by location..."
//           // value={searchLocation}
//           onChange={e => handleInputChange(e, setSearchLocation)}
//           className="rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border[#F5A3CC]"        />

//         <input
//           type="text"
//           placeholder="Search by price..."
//           // value={searchPrice}
//           onChange={e => handleInputChange(e, setSearchPrice)}
//           className="rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border[#F5A3CC]"        />
//         <button
//           onClick={handleSearch}
//           className=" bg-[#F5A3CC] text-black rounded hover:bg-white px-4 py-2  "
// >
//           Search
//         </button>
//       </div>
//       <Categories/>
      
//     </div>
//   )
// }

// export default Events
