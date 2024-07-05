import Categories from "./components/categories";
import Events from "./components/events";
import Hero from "./components/hero";

const LandingPage = () => {
    return <div className="bg-[#e5cfda]">

        <Hero/>
        <Categories/>
        <Events/>


    </div>;
  
};

export default LandingPage;