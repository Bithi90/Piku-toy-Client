/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const AllToyRow = ({ allToy, handleDelete }) => {
    

    const { _id, name, picture, price} = allToy;

    return (


        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-[100px] h-[80px]">
                            <img src={picture} alt="toy" />
                        </div>
                    </div>
                </div>
            </td>
            <td className="text-xl font-bold text-orange-600">{name}</td>
            <td className="font-bold">{price}</td>
            <th>
               <Link to={`/toy/${_id}`} ><button className="btn font-bold text-orange-600 btn-xs">Details</button></Link>
            </th>
            
        </tr>

    );
};

export default AllToyRow;