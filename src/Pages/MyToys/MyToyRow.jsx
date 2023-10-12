/* eslint-disable react/prop-types */




const MyToyRow = ({ myToy, handleDelete }) => {

    const { _id, name, photo, price, sellerEmail} = myToy;

    return (

        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="w-24 h-24 rounded">
                        {photo && <img src={photo} alt="" />}
                    </div>
                </div>
            </td>
            <td className="text-xl font-bold text-orange-600">{name}</td>
            <td className="text-xl font-bold ">
                {sellerEmail}
            </td>
            <td className="text-xl font-bold ">${price}</td>
            
        </tr>

    );
};

export default MyToyRow;