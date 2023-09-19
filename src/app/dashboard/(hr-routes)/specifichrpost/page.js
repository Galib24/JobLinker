"use client";

import { AuthContext } from "@/provider/AuthProvider";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";

const HrJobPostPage = () => {
  const { user } = useContext(AuthContext);
  const [featureJobData, setFeatureJobData] = useState([]);

  // get the data
  useEffect(() => {
    const fetchHrData = async () => {
      const response = await fetch("/api/hr");
      const data = await response.json();
      // console.log(data);
      setFeatureJobData(data);
    };

    fetchHrData();
  }, []);

  const specificHrData = featureJobData?.filter(
    (job) => job.HrEmail === user.email
  );
  // console.log(specificHrData);

  return (
    <div>
      <h2 className="text-4xl font-semibold mt-20 mb-5 text-center">
        My posted Job: {specificHrData.length}
      </h2>
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
              <th>update</th>
            </tr>
          </thead>
          <tbody>
            {specificHrData.map((item, index) => (
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
                <td>{item?.rating}</td>
                <td>
                  <button className="btn  px-10 p-3 rounded-lg text-white bg-red-500 hover:bg-[#40e1f9] ease-out duration-300">
                    <FaTrash className="text-xl hidden lg:block"></FaTrash>
                    <span>Delete</span>
                  </button>
                </td>
                <td>
                  <button className="btn  px-10 p-3 rounded-lg text-white bg-[#40e1f9] hover:bg-[#40e1f9] ease-out duration-300">
                    {/* <FaTrash className="text-xl hidden lg:block"></FaTrash> */}
                    <span>update</span>
                  </button>
                </td>
              </tr>
            )) || ""
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HrJobPostPage;
