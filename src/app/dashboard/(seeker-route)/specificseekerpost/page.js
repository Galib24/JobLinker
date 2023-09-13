"use client";

import { AuthContext } from "@/provider/AuthProvider";
import Image from "next/image";
import { useEffect, useState } from "react";
// import axios from "axios";
import { useContext } from "react";
// import { FaStar, FaTrash } from "react-icons/fa6";
// import { useQuery } from "react-query";

const Specificseekerpost = () => {
  const [dataOfJobSeekers, setDataOfJobSeekers] = useState([]);
  const { user } = useContext(AuthContext);


  useEffect(() => {
    const fetchSeekerData = async () => {
      try {
        const response = await fetch("/api/seeker");
        const data = await response.json();
        setDataOfJobSeekers(data);
        // setIsLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        // setIsLoading(false); // Set loading to false in case of an error
      }
    };

    fetchSeekerData();
  }, []);

  const specificSeekerData = dataOfJobSeekers?.filter(
    (job) => job.seekerEmail === user?.email
  );

  console.log(specificSeekerData);

  return <div>
    {/* {specificSeekerData?.map((jobPost) => (
      <div key={jobPost._id}>
        <h2>{jobPost.findingJobTitle}</h2>
      </div>
    )) || ""
    } */}

<h2 className="text-center font-bold text-3xl my-10">My Applied Job: {specificSeekerData.length}</h2>


    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th className="text-center">My Email</th>
          <th>My Name</th>
          <th>Experience</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {specificSeekerData.map((item, index) => (
          <tr key={item._id}>
            <th>{index + 1}</th>
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
            {/* seeker Email */}
            <td>{item?.seekerEmail || "N/A"}</td>
            {/* Job Title */}
            <td>{item?.seekerName}</td>
            {/* job type / job place */}
            <td>
              <h2 className="text-center"> {item?.jobExperience} </h2>
            </td>
            {/* <td>
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
                                                
                                            </button>
                                        )}
                                    </td> */}
          </tr>
        )) || ""
        
        }
      </tbody>
    </table>
  </div>;
};

export default Specificseekerpost;
