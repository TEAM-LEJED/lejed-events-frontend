import React from 'react';
import k from "../constants";


const EventsCategories = ({ categories }) => {
  return (
    <div>
      <select name="event-type" className="rounded-full border-y border-white">
        <option value="all">All Events</option>
        {k.CATEGORIES.map(
            (category, index) => (
          <optgroup key={index} label={category.label}>
            {category.subcategories.map((subcategory, subIndex) => (
              <option key={subIndex} value={subcategory.value}>
                {subcategory.label}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
};

export default EventsCategories;
