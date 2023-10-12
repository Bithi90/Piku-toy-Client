import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Category from "../Category/Category";
import Gellary from "../Gellary/Gellary";


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Piku | Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
                <Category></Category>
                <Categories></Categories>
                <Gellary></Gellary>
            </div>
        </>

    );
};

export default Home;