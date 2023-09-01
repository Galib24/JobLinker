"use client"
import { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    // get the data
    useEffect(() => {
        const fetchUsersData = async () => {
            const response = await fetch("/api/users");
            const data = await response.json();
            console.log(data);
            setUsers(data);
        };

        fetchUsersData();
    }, []);
    return (
        <>
            <h3 className="text-3xl font-semibold text-center my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead className="text-center">
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Instructor</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr
                                key={user._id}
                                className="text-center"
                            >
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td> <button className="btn text-blue-500 btn-ghost btn-md">Admin</button></td>

                                <td><button className="btn text-blue-500 btn-ghost btn-md">Instructor</button></td>
                                <td>

                                    <button className="btn text-red-500 btn-ghost btn-md"><FaTrashAlt></FaTrashAlt></button>

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </>
    );
};

export default UsersPage;