"use client";

import GetSeekerJobApplyFromDB from "@/database/dataFromMongoDB/getSeekerJobApplyFromDB";
import { AuthContext } from "@/provider/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaStar } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import './page.css'

const MyjobappliedPage = () => {
  const { user } = useContext(AuthContext);

  const [seekerApplies] = GetSeekerJobApplyFromDB();
  const myJobApplies = seekerApplies?.filter(
    (job) => job.seekerEmail === user.email
  );
  // console.log(myJobApplies);

  return (
    <div>
      <h2 className="text-center font-bold text-2xl my-10">
        <FiSend className="text-" /> My Applied Job: {myJobApplies.length}
      </h2>
      <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Company Email</th>
            <th>Job Title</th>
            <th>Rating</th>
            <th>Resume Link</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myJobApplies.map((item, index) => (
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
              {/* seeker Email */}
              <td>{item?.HrEmail || "N/A"}</td>
              {/* Job Title */}
              <td>{item?.jobTitle}</td>
              {/* job type / job place */}
              <td>
                <FaStar className="text-yellow-500" /> {item?.rating}
              </td>
              <td className="text-center">
                <Link
                  target="_blank"
                  className="text-blue-600 "
                  href={item?.seekerResumeLink}
                >
                  Link
                </Link>
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
          )) || ""}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default MyjobappliedPage;
