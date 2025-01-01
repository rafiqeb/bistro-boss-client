import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Category from "../components/Category";
import PopularManu from "../components/PopularManu";
import Featured from "../components/section/Featured";
import Testmonials from "../components/Testmonials";




const Home = () => {
    return (
        <div>
            <Helmet><title>Bistro Boss | Home</title></Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularManu></PopularManu>
            <Featured></Featured>
            <Testmonials></Testmonials>
        </div>
    );
};

export default Home;