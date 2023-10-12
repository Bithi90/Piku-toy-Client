import { useEffect, useState } from 'react';
import FeaturedItem from './FeaturedItem';

const Gellary = () => {

    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        fetch('https://piku-toy-server.vercel.app/featured')
            .then(res => res.json())
            .then(data => setFeatured(data));
    }, [])

    return (
        <div >
            <h2 className='text-4xl font-black text-center my-10 text-orange-600'>Popular in Store </h2>
            <div className='grid grid-cols-3 ml-[100px] grid-flow-rows gap-4'>
                {
                    featured.map(item => <FeaturedItem
                        key={item.id}
                        item={item}
                    ></FeaturedItem>)
                }
            </div>


        </div>
    );
};

export default Gellary;