import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Category = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://piku-toy-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategory(data));
    }, [])

    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-10 text-orange-600">Shop by Category</h2>
           
            <div className="grid grid-rows-8 grid-flow-col gap-4 my-20">

                {
                    category.map(categories => <p
                        key={categories.id}
                        className="border border-slate-300 hover:border-indigo-300 p-2 text-center text-orange-600 font-bold rounded-lg  "
                    >
                        <Link to={`/category/${categories.id}`}>{categories.name}</Link>
                    </p>)
                }
            </div>
        </div>

    );
};

export default Category;  