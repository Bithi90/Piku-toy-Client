/* eslint-disable react/prop-types */


const ToyCard = ({ toy }) => {

    const { name, picture, price, rating ,available_Quantity   } = toy;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className="flex gap-10 ">
                    <p>Price : {price}</p>
                    <p>Rating: {rating}</p>
                </div>
                <p>Available_Quantity : {available_Quantity}</p>
                <div className="card-actions">
                    <button className="btn bg-orange-400 ">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;