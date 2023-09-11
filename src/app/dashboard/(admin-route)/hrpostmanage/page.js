"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar, FaTrash } from "react-icons/fa6";

const HrAllJobPost = () => {
    const [featureJobData, setFeatureJobData] = useState([]);
    const [selectedItemId, setSelectedItemId] = useState(null);

    // Function to handle item deletion
    const handleDelete = async () => {
        // Make an API request to delete the item by its ID
        if (selectedItemId) {
            // Replace '/api/delete' with the actual delete API endpoint
            const response = await fetch(`/api/hr/${selectedItemId}`, {
                method: "DELETE",
            });

            if (response.status === 200) {
                // Remove the item from the local state
                setFeatureJobData((prevData) =>
                    prevData.filter((item) => item._id !== selectedItemId)
                );
                setSelectedItemId(null); // Clear the selected item
            }
        }
    };

    // get the data from mongodb
    useEffect(() => {
        const fetchHrData = async () => {
            const response = await fetch("/api/hr");
            const data = await response.json();
            setFeatureJobData(data);
        };

        fetchHrData();
    }, []);

    return (
        <div>
            <h2 className="text-4xl font-semibold mt-20 mb-5 text-center">HR Management All Data</h2>
            <div className="overflow-x-auto px-10 py-10 text-center">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Company Logo</th>
                            <th>HR Email</th>
                            <th>Job Title</th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {featureJobData.map((item, index) => (
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <Image
                                                    width={100}
                                                    height={100}
                                                    src={item.companyLogo}
                                                    alt="company logo"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                {/* HR Email */}
                                <td>{item?.HrEmail || "N/A"}</td>
                                {/* Job Title */}
                                <td>{item?.jobTitle}</td>
                                {/* job type / job place */}
                                <td>
                                    <FaStar className="text-yellow-500"></FaStar> {item?.rating}
                                </td>
                                <td>
                                    {selectedItemId === item._id ? (
                                        <div>
                                            <button
                                                className="btn px-4 py-2 rounded-lg text-white hover:bg-red-500 bg-[#40e1f9] ease-out duration-300"
                                                onClick={handleDelete}
                                            >
                                                <FaTrash className="text-xl hidden lg:block" />
                                                <span>YES</span>
                                            </button>
                                            <button
                                                className="btn px-4 py-2 rounded-lg text-white bg-green-500 hover:bg-blue-500 ml-2"
                                                onClick={() => setSelectedItemId(null)} // Cancel deletion
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            className="btn px-4 py-2 rounded-lg text-white hover:bg-red-500 bg-[#40e1f9] ease-out duration-300"
                                            onClick={() => setSelectedItemId(item._id)}
                                        >
                                            <FaTrash className="text-xl hidden lg:block" />
                                            <span>Delete</span>
                                            {/* Delete */}
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HrAllJobPost;
