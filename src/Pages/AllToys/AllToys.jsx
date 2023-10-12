import { useContext, useEffect, useState } from "react";
import AllToyRow from "./AllToyRow";
import { AuthContext } from "../../Provider/Authprovider";


const AllToys = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [allToys, setAllToys] = useState([]);

    const url = `http://localhost:5000/toy`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [url])

    const handleDelete = (id) => {
        const proceed = confirm('Are you sure you want to delete?');

        if (proceed) {
            fetch(`http://localhost:5000/toy/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfull');
                        const remaining = allToys.filter(allToy => allToy._id !== id);
                        setAllToys(remaining);
                    }
                })
        }
    }


    const handleUpdate = id => {
        fetch(`http://localhost:5000/toy/${id}`, {
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
                    const remaining = AllToys.filter(allToy => allToy._id !== id);
                    const updated = AllToys.find(allToy => allToy._id === id);
                    updated.update = 'update'
                    const newToys = [updated, ...remaining];
                    setAllToys(newToys);
                }
            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="font-extrabold text-xl text-orange-700">
                            <th><input type="checkbox" className="checkbox mx-2" disabled /></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Details</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allToys.map(allToy => <AllToyRow
                                key={allToy._id}
                                allToy={allToy}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            ></AllToyRow>)
                        }
                    </tbody>


                </table>
            </div>

        </div>

    );
};

export default AllToys;