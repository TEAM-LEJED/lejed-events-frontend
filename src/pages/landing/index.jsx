import Categories from "./components/categories";
import Events from "./components/events";
import Subscription from "./components/subscription";
import TopBar from "./components/topBar";

const LandingPage = () => {
    return <div>
        <TopBar/>
        <Categories/>
        <Events/>
        <Subscription/>

    </div>;
  
};

export default LandingPage;