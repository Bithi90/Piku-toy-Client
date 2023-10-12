/* eslint-disable react/prop-types */


const FeaturedItem = ({ item }) => {

    const { name, picture, price, rating } = item;

    return (
        <div className="card w-[250px] h-[350px] bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className="">
                    <p>Price : {price}</p>
                    <p>Rating: {rating}</p>
                </div>
                <div className="card-actions">
                    <button className="btn bg-orange-400">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;