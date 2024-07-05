import React from 'react';
import hostImage from '../assets/images/headShot.jpg';

const EventHost = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center mb-4">
        <img src={hostImage} alt="Host" className="w-12 h-12 rounded-full mr-3" />
        <div>
          <h2 className="text-xl font-semibold">Hosted By Beth Lee</h2>
          <p className="text-gray-600">Event Host is very good <br /> with what he does</p>
        </div>
      </div>
      <div className="flex justify-between">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none">
          Follow
        </button>
        {/* Add more buttons or actions here */}
      </div>
    </div>
  );
}

export default EventHost;
