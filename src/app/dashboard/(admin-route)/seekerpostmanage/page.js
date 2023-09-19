"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import './page.css'

const Seekerpostmanage = () => {
  const [dataOfJobSeekers, setDataOfJobSeekers] = useState([]);
  const [selectedItemIdSeeker, setSelectedItemId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // delete
  const handleDelete = async () => {
    // Make an API request to delete the item by its ID
    if (selectedItemIdSeeker) {
      // Replace '/api/delete' with the actual delete API endpoint
      const response = await fetch(`/api/seeker/${selectedItemIdSeeker}`, {
        method: "DELETE",
      });

      if (response.status === 200) {
        // Remove the item from the local state
        setDataOfJobSeekers((prevData) =>
          prevData.filter((item) => item._id !== selectedItemIdSeeker)
        );
        setSelectedItemId(null); // Clear the selected item
      }
    }
  };

  // get the data from mongodb
  useEffect(() => {
    const fetchSeekerData = async () => {
      try {
        const response = await fetch("/api/seeker");
        const data = await response.json();
        setDataOfJobSeekers(data);
        setIsLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set loading to false in case of an error
      }
    };

    fetchSeekerData();
  }, []);
  return (
    <div>
      <h2 className="text-4xl font-semibold mt-20 mb-5 text-center sm:text-sm">Seeker Management All Data </h2>
      <div className="overflow-x-auto px-10 py-10 text-center">

        {isLoading ? ( // Render loader when isLoading is true
          <div className="text-center text-green-500 text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="#000" stroke-width="10" fill="none">
                <animate attributeName="stroke-dashoffset" from="0" to="251" dur="2s" repeatCount="indefinite" />
                <animate attributeName="stroke-dasharray" values="150.6 100.4;1 250;150.6 100.4" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        ) : (

          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>
                  Company Logo
                </th>
                <th>Seeker Email</th>
                <th>Seeker Name</th>
                <th>job Experience</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {
                dataOfJobSeekers.map((item, index) => <tr key={item._id}>
                  <th>
                    {index + 1}
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <Image
                            width={100}
                            height={100}
                            src={item.image}
                            alt="company logo"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  {/* HR Email */}
                  <td>
                    {item?.seekerEmail || "N/A"}
                  </td>
                  {/* Job Title */}
                  <td>{item?.seekerName}</td>
                  {/* job type / job place */}
                  <td>{item?.jobExperience}</td>
                  <td>
                    {selectedItemIdSeeker === item._id ? (
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
                )
              }
            </tbody>
          </table>
        )}

      </div>

    </div>
  )
};

export default Seekerpostmanage;
