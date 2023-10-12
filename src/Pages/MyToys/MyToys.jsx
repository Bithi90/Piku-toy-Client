import { useContext, useEffect, useState } from "react";
import MyToyRow from "./MyToyRow";
import { AuthContext } from "../../Provider/Authprovider";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [myToys, setMyToys] = useState([]);

    const url = `http://localhost:5000/addToy?sellerEmail=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url])

    const handleDelete = (id) => {
        const proceed = confirm('Are you sure you want to delete?');

        if (proceed) {
            fetch(`http://localhost:5000/addToy/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfull');
                        const remaining = myToys.filter(myToy => myToy._id !== id);
                        setMyToys(remaining);
                    }
                })
        }
    }


    const handleUpdate = id => {
        fetch(`http://localhost:5000/addToy/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                update: 'update'
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = myToys.filter(myToy => myToy._id !== id);
                    const updated = myToys.find(myToy => myToy._id === id);
                    updated.update = 'update'
                    const newToys = [updated, ...remaining];
                    setMyToys(newToys);
                }
            })
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <h2 className="text-3xl">{myToys.length}</h2>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-lg font-bold text-orange-600">
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>SellerEmail</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(myToy => <MyToyRow
                                key={myToy._id}
                                myToy={myToy}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            ></MyToyRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;