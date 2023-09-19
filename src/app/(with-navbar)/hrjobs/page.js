"use client";

import SingleFeaturedJobs from "@/components/HomePage/FeaturedJobs/SingleFeaturedJobs";
import BannerComponent from "@/components/Shared/BannerComponent/BannerComponent";
import { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GoFilter } from "react-icons/go";
import { PiCurrencyCircleDollarDuotone } from "react-icons/pi";

const HRJobsPage = () => {
  const [featureJobData, setFeatureJobData] = useState([]);
  // const [query, setQuery] = useState("");
  // const searchRef = useRef(null)

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


  // const handleSearch = async (e) =>{
  //   console.log(searchRef.current.value);
  //   setQuery(searchRef.current.value);
  //   const response = await fetch("/api/searchHr?query=" + query);
  //     const SearchData = await response.json();
  //     setFeatureJobData(SearchData);

  // }

  return (
    <div>
      <div
        className="bg-indigo-50">
        <BannerComponent headingTitle="Find Jobs" pageName="Job" />
      </div>
      {/* for small device start */}
      <div
        className="drawer lg:hidden">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle" />
        <div
          className="drawer-content">
          {/* Page content here */}
          <div
            className="flex items-center justify-center mt-6">
            <label
              htmlFor="my-drawer"
              className="btn drawer-button bg-blue-100 text-blue-500 font-bold">
              <GoFilter className="text-xl" /> Filter
            </label>
          </div>
        </div>
        <div
          className="drawer-side">
          <label
            htmlFor="my-drawer"
            className="drawer-overlay">
          </label>
          <ul
            className="menu w-80 h-full bg-indigo-50 text-base-content py-20 mt-4">
            {/* Sidebar content here */}
            <div>
              {/* Job type section */}
              <div>
                <h2
                  className="text-lg font-semibold text-center text-gray-600 pb-4 pt-6">
                  Job type
                </h2>
                {/* main grid section */}
                <div className="grid grid-rows-3">
                  <div className="flex px-6 pb-3">
                    <input
                      type="checkbox"
                      className="toggle toggle-info  toggle-md" />
                    <p
                      className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                      Full Time
                    </p>
                  </div>
                  <div
                    className="flex px-6 pb-3">
                    <input
                      type="checkbox"
                      className="toggle toggle-info  toggle-md" />
                    <p
                      className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                      Part Time
                    </p>
                  </div>
                  <div
                    className="flex px-6 pb-3">
                    <input
                      type="checkbox"
                      className="toggle toggle-info  toggle-md" />
                    <p
                      className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                      Temporary
                    </p>
                  </div>
                  <div
                    className="flex px-6 pb-3">
                    <input
                      type="checkbox"
                      className="toggle toggle-info  toggle-md" />
                    <p
                      className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                      On Site
                    </p>
                  </div>
                  <div
                    className="flex px-6 pb-3">
                    <input
                      type="checkbox"
                      className="toggle toggle-info  toggle-md" />
                    <p
                      className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                      Remote
                    </p>
                  </div>
                  <div
                    className="flex px-6 pb-3">
                    <input
                      type="checkbox"
                      className="toggle toggle-info  toggle-md" />
                    <p
                      className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                      Hybrid
                    </p>
                  </div>
                </div>
              </div>
              {/* divider */}
              <hr
                className="border border-gray-300 rounded-full mx-6 my-6" />
              {/* salary section */}
              <div>
                <h2
                  className="text-lg font-semibold text-center text-gray-600 pb-4">
                  Salary Select
                </h2>
                {/* main grid section */}
                <div
                  className="grid grid-rows-3">
                  <div
                    className="flex px-6 pb-3">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-info" />
                    <p
                      className="font-semibold px-4 text-sm text-gray-500 flex items-center justify-center">
                      <PiCurrencyCircleDollarDuotone className="text-xl mr-1" />{" "}
                      $400 - $449 / month
                    </p>
                  </div>
                  <div
                    className="flex px-6 pb-3">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-info" />
                    <p
                      className="font-semibold px-4 text-sm text-gray-500 flex items-center justify-center">
                      <PiCurrencyCircleDollarDuotone className="text-xl mr-1" />
                      $450 - $499 / month
                    </p>
                  </div>
                  <div
                    className="flex px-6 pb-3">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-info" />
                    <p
                      className="font-semibold px-4 text-sm text-gray-500 flex items-center justify-center">
                      <PiCurrencyCircleDollarDuotone className="text-xl mr-1" />{" "}
                      $500 - $549 / month
                    </p>
                  </div>
                  <div
                    className="flex px-6 pb-3">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-info" />
                    <p
                      className="font-semibold px-4 text-sm text-gray-500 flex items-center justify-center">
                      <PiCurrencyCircleDollarDuotone className="text-xl mr-1" />
                      $550 - $599 / month
                    </p>
                  </div>
                  <div
                    className="flex px-6 pb-3">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-info" />
                    <p
                      className="font-semibold px-4 text-sm text-gray-500 flex items-center justify-center">
                      <PiCurrencyCircleDollarDuotone className="text-xl mr-1" />
                      $600 - $649 / month
                    </p>
                  </div>
                  <div
                    className="flex px-6 lg:pb-3">
                    <input
                      type="checkbox" className="checkbox checkbox-info" />
                    <p
                      className="font-semibold px-4 text-sm text-gray-500 flex items-center justify-center">
                      <PiCurrencyCircleDollarDuotone className="text-xl mr-1" />
                      $650 - $699 / month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
      {/* for small device end */}
      {/* main grid */}
      <div
        className="grid grid-cols-4 mt-6 container mx-auto">
        {/* right div section */}
        <div
          className="mr-1 ml-10 mb-10 hidden lg:block">
          <div
            className="bg-indigo-50 w-full rounded-2xl pb-8 pt-4">
            {/* Job type section */}
            <div>
              <h2
                className="text-lg font-semibold text-center text-gray-600 pb-4 pt-6">
                Job type
              </h2>
              {/* main grid section */}
              <div
                className="grid grid-rows-3">
                <div
                  className="flex px-6 pb-3">
                  <input
                    type="checkbox"
                    className="toggle toggle-info  toggle-md"
                  />
                  <p className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                    Full Time
                  </p>
                </div>
                <div className="flex px-6 pb-3">
                  <input
                    type="checkbox"
                    className="toggle toggle-info  toggle-md"
                  />
                  <p className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                    Part Time
                  </p>
                </div>
                <div className="flex px-6 pb-3">
                  <input
                    type="checkbox"
                    className="toggle toggle-info  toggle-md"
                  />
                  <p className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                    Temporary
                  </p>
                </div>
                <div className="flex px-6 pb-3">
                  <input
                    type="checkbox"
                    className="toggle toggle-info  toggle-md"
                  />
                  <p className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                    On Site
                  </p>
                </div>
                <div className="flex px-6 pb-3">
                  <input
                    type="checkbox"
                    className="toggle toggle-info  toggle-md"
                  />
                  <p className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                    Remote
                  </p>
                </div>
                <div className="flex px-6 pb-3">
                  <input
                    type="checkbox"
                    className="toggle toggle-info  toggle-md"
                  />
                  <p className="font-semibold px-2 text-sm text-gray-500 flex items-center justify-center">
                    Hybrid
                  </p>
                </div>
              </div>
            </div>
            {/* divider */}
            <hr className="border border-gray-300 rounded-full mx-6 my-6" />
            {/* salary section */}
            <div>
              <h2 className="text-lg font-semibold text-center text-gray-600 pb-4">
                Salary Select
              </h2>
              {/* main grid section */}
              <div className="grid grid-rows-3">
                <div className="flex px-6 pb-3">
                  <input type="checkbox" className="checkbox checkbox-info" />
                  <p className="font-semibold px-4 text-sm text-gray-500 flex items-center justify-center">
                    <PiCurrencyCircleDollarDuotone className="text-xl mr-1" />{" "}
                    $400 - $449 / month
                  </p>
                </div>
                <div className="flex px-6 pb-3">
                  <input type="checkbox" className="checkbox checkbox-info" />
                  <p className="font-semibold px-4 text-sm text-gray-500 flex items-center justify-center">
                    <PiCurrencyCircleDollarDuotone className="text-xl mr-1" />
                    $450 - $499 / month
                  </p>
                </div>
                <div className="flex px-6 pb-3">
                  <input type="checkbox" className="checkbox checkbox-info" />
                  <p className="font-semibold px-4 text-sm text-gray-500 flex items-center justify-center">
                    <PiCurrencyCircleDollarDuotone className="text-xl mr-1" />{" "}
                    $500 - $549 / month
                  </p>
                </div>
                <div className="flex px-6 pb-3">
                  <input type="checkbox" className="checkbox checkbox-info" />
                  <p className="font-semibold px-4 text-sm text-gray-500 flex items-center justify-center">
                    <PiCurrencyCircleDollarDuotone className="text-xl mr-1" />
                    $550 - $599 / month
                  </p>
                </div>
                <div className="flex px-6 pb-3">
                  <input type="checkbox" className="checkbox checkbox-info" />
                  <p className="font-semibold px-4 text-sm text-gray-500 flex items-center justify-center">
                    <PiCurrencyCircleDollarDuotone className="text-xl mr-1" />
                    $600 - $649 / month
                  </p>
                </div>
                <div className="flex px-6 pb-3">
                  <input type="checkbox" className="checkbox checkbox-info" />
                  <p className="font-semibold px-4 text-sm text-gray-500 flex items-center justify-center">
                    <PiCurrencyCircleDollarDuotone className="text-xl mr-1" />
                    $650 - $699 / month
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

                    // name="searchHr"
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
                Total Jobs Show: {featureJobData?.length}
              </small>
            </div>
            <div className="mt-1 mb-16">
              {featureJobData?.map((item) => (
                <SingleFeaturedJobs
                  key={item._id}
                  item={item}
                ></SingleFeaturedJobs>
              ))}
            </div>
            {/* all card section end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRJobsPage;
