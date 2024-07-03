import { Link } from "react-router-dom";
import k from "../constants";
import EventsCategories from "./eventsCategories";
import {logoImg} from "../assets";
import DateRange from "./dateRange";
const Navbar = () => {
  return (
    <div className="flex  bg-yellow-400  justify-between place-items-center ">
 <img
      src={logoImg}
      alt="logo"
      className="w-16 h-16" 
    />    
    <EventsCategories/>
    
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
   
  </div>


      <div className="flex gap-x-16">

        {
          k.NAVLINKS.map(
            (item, index) =>{
              return <Link key={index} to={item.path}>{item.name}</Link>
            }
          )
        }      
      </div>

    </div>
  )
}

export default Navbar;