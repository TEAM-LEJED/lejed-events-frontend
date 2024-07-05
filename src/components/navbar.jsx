import { Link } from "react-router-dom";
import k from "../constants";
import EventsCategories from "./eventsCategories";
import { logoImg } from "../assets";
import DateRange from "./dateRange";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 bg-[#EC4899] bg-opacity-50 flex justify-between items-center px-12 w-screen">
      <div className="ml-4 flex items-center"> 
        <img src={logoImg} alt="logo" className="w-20 h-20" />
        <EventsCategories />
      </div>
      <div className="flex gap-x-6 mr-4"> 
        {k.NAVLINKS.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="text-gray-900 hover:text-gray-600 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white "
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
