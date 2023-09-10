"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useQuery } from "react-query";

const HrAllJobPost = () => {
    const [DeleteHr, setDeleteHr] = useState([]);

    const {
        data: featureJobData = [],
        refetch,
        isLoading,
        error,
      } = useQuery({
        queryFn: async () => {
          const res = await axios("/api/hr"); 
          return res.data;
        },
      });
    
      if (isLoading)
        return (
          <h2 className="text-4xl font-semibold text-green-700 text-center mt-10">
            Loading...
          </h2>
        );


    // hr delete 
    const handleDelete = async (hrId) => {
        try {
          const response = await fetch(`/api/hr/${hrId}`, {
            method: "DELETE",
          });
          if (response.ok) {
            refetch();
            toast.success(`Deleted hr`);
          }
    
          if (response.status === 200) {
            //hr deleted successfully, update the UI by removing the hr
            setDeleteHr((prevHr) => prevHr.filter((hr) => hr._id !== hrId));
          } else {
            // Handle error here if needed
            console.error("Failed to delete hr.");
          }
        } catch (error) {
          // Handle network or other errors here
          console.error("An error occurred while deleting hr.", error);
        }
      };
      
    return (
        <div>
            <h2 className="text-4xl font-semibold mt-20 mb-5 text-center">HR Management All Data </h2>
            <div className="overflow-x-auto px-10 py-10 text-center">
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
                            <th>HR Email</th>
                            <th>Job Title</th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            featureJobData.map((item,index)=><tr key={item._id}>
                                <th>
                                    {index+1}
                                </th>
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
                               <td>
                                    {item?.HrEmail || "N/A"}
                                </td>
                                {/* Job Title */}
                                <td>{item?.jobTitle}</td>
                                {/* job type / job place */}
                                <td>{item?.rating}</td>
                                <td>
                                    <button onClick={() => handleDelete(item._id)} className="btn  px-10 p-3 rounded-lg text-white bg-red-500 hover:bg-[#40e1f9] ease-out duration-300"><FaTrash className="text-xl hidden lg:block"></FaTrash><span>Delete</span></button>
                                </td>
                            </tr>
                            )
                        }          
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default HrAllJobPost;