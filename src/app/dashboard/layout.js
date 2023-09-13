"use client";

import { AuthContext } from "@/provider/AuthProvider";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaHome, FaRegUserCircle, FaUsersCog } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { IoMdAnalytics } from "react-icons/io";
import { IoAnalyticsSharp } from "react-icons/io5";
import {
  MdOutlineManageAccounts,
  MdPersonSearch,
  MdRebaseEdit,
} from "react-icons/md";
import { RiSearchEyeLine } from "react-icons/ri";
import { useQuery } from "react-query";

const DashboardLayout = ({ children }) => {
  const { user } = useContext(AuthContext);

  const {
    data: dbUsers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryFn: async () => {
      const res = await axios("/api/users");
      return res.data;
    },
  });

  if (isLoading)
    return (
      <h2 className="text-4xl font-semibold text-green-700 text-center mt-10">
        Loading...
      </h2>

      // loader
      //   <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      //   <circle cx="50" cy="50" r="40" stroke="#000" stroke-width="10" fill="none">
      //     <animate attributeName="stroke-dashoffset" from="0" to="251" dur="2s" repeatCount="indefinite" />
      //     <animate attributeName="stroke-dasharray" values="150.6 100.4;1 250;150.6 100.4" dur="2s" repeatCount="indefinite" />
      //   </circle>
      // </svg>
    );

  const matchedUser = dbUsers?.filter(
    (dbUser) => dbUser?.email === user?.email
  );

  // console.log(matchedUser[0]);
  const userRole = matchedUser?.[0]?.role;

  const isAdmin = userRole === "admin";

  const isHr = userRole === "hr";

  const isSeeker = userRole === "seeker";

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 min-h-full bg-gradient-to-r from-cyan-50 to-blue-100 text-gray-800">
          {/* Sidebar content here */}
          <Link className="flex items-center justify-center" href="/">
            <Image
              width={140}
              height={40}
              className="cursor-pointer rounded-md"
              src="https://i.ibb.co/ZMxRfGL/job-Linker-Logo.png"
              alt=""
            />
          </Link>
          <li className="font-bold mt-5 mb-3 text-gray-500 ms-2">Menu</li>

          {isAdmin && (
            <>
              <li>
                <Link
                  className="font-semibold my-1"
                  href={`/dashboard/analysis`}
                >
                  <IoAnalyticsSharp className="text-2xl" />
                  Admin Analysis
                </Link>
              </li>
              <li>
                <Link className="font-semibold" href={`/dashboard/users`}>
                  <FaUsersCog className="text-xl" /> User Management
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold my-1"
                  href={`/dashboard/hrpostmanage`}
                >
                  <FaRegUserCircle className="text-xl" /> HR POST MANAGE
                </Link>
              </li>
              <li>
                <Link
                  className="font-semibold my-1"
                  href={`/dashboard/seekerpostmanage`}
                >
                  <MdRebaseEdit className="text-xl" /> Seeker POST MANAGE
                </Link>
              </li>
            </>
          )}

          {isHr && (
            <>
              <li>
                <Link
                  className="font-semibold"
                  href="/dashboard/specifichrpost"
                >
                  My Job Post
                </Link>
              </li>
              <li>
                <Link className="font-semibold" href="/dashboard/applylist">
                  Management Applicant List
                </Link>
              </li>
              <li>
                <a>Sidebar Item Hr item 2</a>
              </li>
            </>
          )}

          {isSeeker && (
            <>
              <li>
                <Link
                  className="font-semibold"
                  href="/dashboard/specificseekerpost"
                >
                  My Job Post
                </Link>
              </li>
              <li>
                <Link className="font-semibold" href="/dashboard/myjobapplied">
                  Applied Job
                </Link>
              </li>
              <li>
                <a>Sidebar Item seeker item 2</a>
              </li>
            </>
          )}

          {isAdmin || isHr || isSeeker ? (
            ""
          ) : (
            <li>
              <Link className="font-semibold" href="/dashboard/myjobapplied">
                My Job Applied
              </Link>
            </li>
          )}

          <div className="divider"></div>

          <li>
            <Link className="font-semibold" href={`/`}>
              <FaHome className="text-xl mr-1" />
              Home
            </Link>
          </li>

          <li>
            <Link href="/hrjobs" className="font-semibold">
              <RiSearchEyeLine className="text-xl" />
              Find A Job
            </Link>
          </li>
          <li>
            <Link href="/seekers" className="font-semibold">
              <MdPersonSearch className="text-xl" /> Find A Seekers
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="font-semibold">
              <ImBlog className="text-xl" /> Blogs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
