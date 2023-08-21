"use client";

import SingleCard from "@/components/SeekersPage/SingleCard";
import BannerComponent from "@/components/Shared/BannerComponent/BannerComponent";
import dataOfJobSeekers from "@/Data/jobSeekers";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const JobSeekersPage = () => {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <div>
      {/* import banner component for displaying just something, it can be imported from another page */}
      <BannerComponent
        headingTitle="Posted Jobs"
        pageName="Seekers"
      ></BannerComponent>

      {/* seekers post part start */}
      <div className="my-20 md:flex">
        {/* filter by job experience and category */}
        <div className="md:w-1/3">
          <div
            className={` absolute ${
              navToggle ? "left-0 top-36" : "left-[-120%]"
            } top-[4.5rem] w-full bg-slate-200 pb-3 pt-2 transition-all duration-300 dark:bg-slate-900 lg:static lg:w-[unset] lg:flex-row lg:bg-transparent lg:pb-0 lg:pt-0 dark:lg:bg-transparent`}
          >
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text font-semibold text-xl">
                  Experience Level
                </span>
              </label>
              <select
                defaultValue="Pick One"
                className="select focus:outline-[#0B0016]"
              >
                <option disabled>Pick One</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div className="form-control w-1/2 mt-14">
              <label className="label">
                <span className="label-text font-semibold text-xl">
                  Job Type
                </span>
              </label>
              <select
                defaultValue="Pick One"
                className="select focus:outline-[#0B0016]"
              >
                <option disabled>Pick One</option>
                <option>Part Time</option>
                <option>Full Time</option>
                <option>Hybrid</option>
              </select>
            </div>
          </div>
        </div>

        {/* all post here */}
        <div className="md:w-2/3">
          {/* filter Toggle */}
          <div className="my-4 text-center lg:hidden">
            <div
              className="swap-rotate swap btn-ghost btn-circle btn ml-2 bg-white dark:bg-slate-800  inline-block"
              onClick={() => setNavToggle(!navToggle)}
            >
              {navToggle ? (
                // <svg
                //   className="swap-on fill-current"
                //   xmlns="http://www.w3.org/2000/svg"
                //   width="32"
                //   height="32"
                //   viewBox="0 0 512 512"
                // >
                //   <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                // </svg>
                <RxCross2 className="text-3xl font-semibold" />
              ) : (
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
              )}
              <span>Filter</span>
            </div>
          </div>

          <div className="flex items-center justify-between px-2">
            <h4 className="">
              Show{" "}
              <span className="font-semibold">{dataOfJobSeekers.length}</span>{" "}
              jobs
            </h4>

            {/* search field */}
            <div className="">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search by title"
                  className="input input-bordered rounded-md border-gray-300 focus:outline-[#0B0016] bg-gray-200 text-gray-900"
                />
                <button className="btn btn-square">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Card for showing job post */}
          <div>
            {dataOfJobSeekers.map((jobPost) => (
              <SingleCard key={jobPost._id} jobPost={jobPost}></SingleCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekersPage;
