"use client";

import SingleCard from "@/components/SeekersPage/SingleCard";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GoFilter } from "react-icons/go";

const JobSeekersPage = () => {
  const [seekerData, setSeekerData] = useState([]);
  const [experience, setExperience] = useState("");

  // get the data from db
  useEffect(() => {
    const fetchSeekerData = async () => {
      // console.log(experience);
      const response = await fetch(`/api/seeker?experience=${3}`);
      const data = await response.json();
      setSeekerData(data);
    };

    fetchSeekerData();
  }, [experience]);

  return (
    <div>
      <div className="bg-indigo-50 lg:pt-36 pt-24 lg:mb-10 mb-4">
        <h2 className="text-3xl font-bold text-center">Find Seekers</h2>
        <p className="font-semibold text-center py-4">Home / Job</p>
      </div>
      {/* for small device start */}
      <div className="drawer lg:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className="flex items-center justify-center mb-4">
            <label
              htmlFor="my-drawer"
              className="btn drawer-button bg-blue-100 text-blue-500 font-bold"
            >
              <GoFilter className="text-xl" /> Filter
            </label>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu w-80 h-full bg-indigo-50 text-base-content py-20 mt-4">
            {/* Sidebar content here */}
            <div>
              {/* Job type section */}
              <div>
                <h2 className="text-lg font-semibold text-center text-gray-600 pb-4 pt-6">
                  Job Experience
                </h2>
                {/* main grid section */}
                <div className="grid grid-rows-3">
                  <div className="flex px-6 pb-3">
                    <input
                      type="checkbox"
                      className="toggle toggle-info  toggle-md"
                    />
                    <p className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                      Fresher
                    </p>
                  </div>
                  <div className="flex px-6 pb-3">
                    <input
                      type="checkbox"
                      className="toggle toggle-info  toggle-md"
                    />
                    <p className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                      1 Year
                    </p>
                  </div>
                  <div className="flex px-6 pb-3">
                    <input
                      type="checkbox"
                      className="toggle toggle-info  toggle-md"
                    />
                    <p className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                      2 Year
                    </p>
                  </div>
                  <div className="flex px-6 pb-3" onClick={() => setExperience(3)}>
                    <input
                      type="checkbox"
                      className="toggle toggle-info  toggle-md"
                      
                    />
                    <p
                      className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center"
                      
                    >
                      3 Year
                    </p>
                  </div>
                  <div className="flex px-6 pb-3">
                    <input
                      type="checkbox"
                      className="toggle toggle-info  toggle-md"
                    />
                    <p className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                      4 Year
                    </p>
                  </div>
                  <div className="flex px-6 pb-3">
                    <input
                      type="checkbox"
                      className="toggle toggle-info  toggle-md"
                    />
                    <p className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                      5+ Year
                    </p>
                  </div>
                </div>
              </div>
              {/* divider */}

              {/* salary section */}
            </div>
          </ul>
        </div>
      </div>
      {/* for small device end */}

      {/* main grid */}
      <div className="grid grid-cols-4 container mx-auto">
        {/* right div section */}
        <div className="mr-1 ml-10 mb-10 hidden lg:block">
          <div className="bg-indigo-50 w-full rounded-2xl pb-8 pt-4">
            {/* Job type section */}
            <div>
              <h2 className="text-lg font-semibold text-center text-gray-600 pb-4 pt-6">
                Job Experience
              </h2>
              {/* main grid section */}
              <div className="grid grid-rows-3">
                <div className="flex px-6 pb-3">
                  <input
                    type="checkbox"
                    className="toggle toggle-info  toggle-md"
                  />
                  <p className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                    Fresher
                  </p>
                </div>
                <div className="flex px-6 pb-3">
                  <input
                    type="checkbox"
                    className="toggle toggle-info  toggle-md"
                  />
                  <p className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                    1 Year
                  </p>
                </div>
                <div className="flex px-6 pb-3">
                  <input
                    type="checkbox"
                    className="toggle toggle-info  toggle-md"
                  />
                  <p className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                    2 Year
                  </p>
                </div>
                <div className="flex px-6 pb-3">
                  <input
                    type="checkbox"
                    className="toggle toggle-info  toggle-md"
                  />
                  <p className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                    3 Year
                  </p>
                </div>
                <div className="flex px-6 pb-3">
                  <input
                    type="checkbox"
                    className="toggle toggle-info  toggle-md"
                  />
                  <p className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                    4 Year
                  </p>
                </div>
                <div className="flex px-6 pb-3">
                  <input
                    type="checkbox"
                    className="toggle toggle-info  toggle-md"
                  />
                  <p className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                    5+ Year
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* left div section */}
        <div className="col-span-4 lg:col-span-3 lg:px-8">
          <div className="w-full">
            {/* heading search and short  */}
            <div className="lg:flex justify-between mx-3">
              {/* search bar start */}
              <div>
                <div className="flex items-end justify-end w-full bg-blue-50 rounded-lg px-4 py-2 shadow">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full h-10 border rounded-md px-3 lg:pr-96 focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <button className="ml-2 px-4 py-2 font-bold rounded-md focus:outline-none bg-blue-400 text-white">
                    <BiSearch className="text-2xl" />
                  </button>
                </div>
              </div>
              {/* search bar end */}
              {/* short by btn start */}
              <div className="flex items-center justify-center">
                <div className="w-fit font-medium my-4 lg:my-0">
                  <select className="select select-bordered">
                    <option>Short By (Default)</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                  </select>
                </div>
              </div>
              {/* short by btn end */}
            </div>
            {/* all card section start */}
            <div>
              <small className="flex justify-end items-end mx-4 font-semibold my-1">
                Total Jobs Show: {seekerData?.length}
              </small>
            </div>
            <div className="mt-1 mb-16">
              {seekerData?.map((jobPost) => (
                <SingleCard key={jobPost._id} jobPost={jobPost}></SingleCard>
              ))}
            </div>
            {/* all card section end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekersPage;
