
import { useLoaderData } from "react-router-dom";


const ToyDetails = () => {

    
    const toyData = useLoaderData();
    console.log(toyData);

    

    const { name, price, picture, details, available_Quantity, rating } = toyData;

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={picture} className="h-[400px] w-[500px] rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl text-orange-600 font-bold">{name}</h1>
                    <p className="py-2 text-2xl "> Rating : {rating}</p>
                    <p className="py-2">Price : {price}</p>
                    <p className="py-2">Quantity : {available_Quantity}</p>
                    <p className="py-2">Details : {details}</p>
                    <button className="btn bg-orange-600">Add to cart</button>
                </div>
            </div>
        </div>
    );
};


export default ToyDetails;