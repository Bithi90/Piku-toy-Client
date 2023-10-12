import { useParams } from "react-router-dom";
import ToyCard from "../ToyCard/ToyCard";
import { useEffect, useState } from "react";


const Categories = () => {

    const { id } = useParams();
    // const categoryToys = useLoaderData();

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/categories/${id}`)
            .then(res => res.json())
            .then(data => setToys(data));
    }, [])

    console.log(toys);

    return (
        <div>
            <div className="grid grid-cols-3 grid-flow-rows gap-4">

                {
                    toys.map(toy => <ToyCard
                        key={toy.id}
                        toy={toy}
                    ></ToyCard>)
                }
            </div>
        </div>
    );
};

export default Categories;