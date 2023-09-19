"use client";

import GetSeekerJobApplyFromDB from "@/database/dataFromMongoDB/getSeekerJobApplyFromDB";
import { AuthContext } from "@/provider/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const HrSpecificApplyJobPage = () => {
  const { user } = useContext(AuthContext);

  const [seekerApplies] = GetSeekerJobApplyFromDB();

  const specificHrJobApp = seekerApplies?.filter(
    (job) => job.HrEmail === user.email
  );
  // console.log(specificHrJobApp);
  // make the table with this data specificHrJobApp

  return <div>

    <h2 className="text-center font-bold text-3xl my-10">Applicant Numbers: {specificHrJobApp?.length}</h2>

    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Applicant Email</th>
          <th>Applicant location</th>
          <th>Resume or CV Link</th>
          <th>Cover letter</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {specificHrJobApp?.map((item, index) => (
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
            <td>{item?.seekerEmail || "N/A"}</td>
            {/* Job Title */}
            <td>{item?.location}</td>
            {/* job type / job place */}
            {/* <td>
              <FaStar className="text-yellow-500"></FaStar> {item?.rating}
            </td> */}
            <td className="text-center">
              <Link  target="_blank" className="text-blue-600 " href={item?.seekerResumeLink}>
                Link
              </Link>
            </td>
            <td>
              {item?.seekerAnsForShouldHire}
            </td>
         <td>
          {item?.jobApplyDate}
         </td>
          </tr>
        )) || ""

        }
      </tbody>
    </table>


  </div>;
};

export default HrSpecificApplyJobPage;
