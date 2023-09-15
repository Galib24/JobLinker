"use client";

import { AuthContext } from "@/provider/AuthProvider";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaRegUserCircle, FaUsersCog } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { GrBlog } from "react-icons/gr";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoAnalyticsSharp, IoHomeOutline } from "react-icons/io5";
import { MdOutlineForwardToInbox, MdOutlinePersonSearch, MdRebaseEdit } from "react-icons/md";
import { useQuery } from "react-query";
import { HiOutlineUserGroup } from "react-icons/hi";

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
      <h2
        className="text-4xl font-semibold text-green-700 text-center mt-10">
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
    (dbUser) => dbUser?.email === user?.email);

  // console.log(matchedUser[0]);
  const userRole = matchedUser?.[0]?.role;

  const isAdmin = userRole === "admin";

  const isHr = userRole === "hr";

  const isSeeker = userRole === "seeker";

  return (
    <div
      className="drawer lg:drawer-open">
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle" />
      <div
        className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
        {children}
      </div>
      <div
        className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          className="drawer-overlay">
        </label>
        <ul
          className="menu p-4 w-64 min-h-full bg-indigo-50">
          {/* Sidebar content here */}
          <Link
            className="flex items-center justify-center"
            href="/">
            <Image
              width={140}
              height={40}
              className="cursor-pointer rounded-md"
              src="https://i.ibb.co/ZMxRfGL/job-Linker-Logo.png"
              alt="" />
          </Link>
          <li
            className="font-bold mt-5 mb-3 text-gray-500 ms-2">
            Menu
          </li>

          {
            isAdmin &&
            (
              <>
                <li>
                  <Link
                    className="font-semibold my-1"
                    href={`/dashboard/analysis`} >
                    <IoAnalyticsSharp className="text-2xl" />
                    Admin Analysis
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-semibold"
                    href={`/dashboard/users`}>
                    <FaUsersCog className="text-xl" /> User Management
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-semibold my-1"
                    href={`/dashboard/hrpostmanage`}>
                    <FaRegUserCircle className="text-xl" /> HR POST MANAGE
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-semibold my-1"
                    href={`/dashboard/seekerpostmanage`} >
                    <MdRebaseEdit className="text-xl" /> Seeker POST MANAGE
                  </Link>
                </li>
              </>
            )
          }

          {
            isHr &&
            (
              <>
                <li>
                  <Link
                    className="font-semibold"
                    href="/dashboard/specifichrpost">
                    <MdOutlineForwardToInbox className="text-2xl text-gray-600" /> My Job Post
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-semibold"
                    href="/dashboard/applylist">
                    <HiOutlineUserGroup className="text-2xl text-gray-600" /> Applicant List Manage
                  </Link>
                </li>
              </>
            )
          }

          {
            isSeeker &&
            (
              <>
                <li>
                  <Link
                    className="font-semibold"
                    href="/dashboard/specificseekerpost">
                    <SlEnvolopeLetter className="text-xl" /> My Job Post
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-semibold"
                    href="/dashboard/myjobapplied">
                    <FiSend className="text-xl" />My Applied Job
                  </Link>
                </li>
              </>
            )
          }

          {
            isAdmin || isHr || isSeeker ?
              (
                ""
              )
              :
              (
                <li>
                  <Link
                    className="font-semibold py-3"
                    href="/dashboard/myjobapplied">
                    <FiSend className="text-xl" />My Applied Jobs
                  </Link>
                </li>
              )
          }

          <div
            className="divider">
          </div>

          <li>
            <Link
              className="font-semibold bg-indigo-50 py-3 text-gray-700 hover:bg-indigo-100 my-1"
              href={`/`}>
              <IoHomeOutline className="text-xl mr-1" />
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/hrjobs"
              className="font-semibold bg-indigo-50 py-3 text-gray-700 hover:bg-indigo-100 my-1">
              <HiOutlineMagnifyingGlass className="text-xl" />
              Find A Job
            </Link>
          </li>
          <li>
            <Link
              href="/seekers"
              className="font-semibold bg-indigo-50 py-3 text-gray-700 hover:bg-indigo-100 my-1">
              <MdOutlinePersonSearch className="text-xl" /> Find A Seekers
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className="font-semibold py-3 my-1">
              <GrBlog className="text-xl" /> Blogs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
