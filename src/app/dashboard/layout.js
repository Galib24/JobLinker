"use client";

import { AuthContext } from "@/provider/AuthProvider";
import axios from "axios";
import Link from "next/link";
import { useContext } from "react";
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

  // const isAdmin = true;
  const isHr = userRole === "hr";
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
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link href={`/`}>Home</Link>
          </li>
          <li>
            <Link href={`/dashboard/hrjobpost`}>HR JOB POST</Link>
          </li>

          {isAdmin && (
            <>
              <li>
                <Link href={`/dashboard/analysis`}>Admin Analysis</Link>
              </li>
              <li>
                <Link href={`/dashboard/users`}>User Management</Link>
              </li>
              <li>
                <a>To do 2 for admin</a>
              </li>
            </>
          )}
          
          {isHr && (
            <>
              <li>
                <Link href="/dashboard/hrjobpost">My Job Post</Link>
              </li>
              <li>
                <a>Sidebar Item Hr item 2</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
