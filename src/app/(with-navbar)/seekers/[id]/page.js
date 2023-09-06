"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GrUserExpert } from "react-icons/gr";
import { BsClock } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { PiBookmarkSimple, PiCurrencyCircleDollarDuotone } from "react-icons/pi";
import { RiUserStarLine } from "react-icons/ri";
import { TbUserStar } from "react-icons/tb";

const SingleSeekerPage = ({ params }) => {
  const [singleSeekerData, setSingleSeekerData] = useState([]);
  //   use console log to see what data have singleHrData, then continue design

  const { id } = params;

  console.log(singleSeekerData)
  const {education,findingJobTitle,image,jobExperience,seekerEmail,seekerJobTime,seekerName,skills}=singleSeekerData

  // get the data
  useEffect(() => {
    const fetchSingleSeekerData = async () => {
      const response = await fetch(`/api/seeker/${id}`);
      const data = await response.json();
      // console.log(data);
      setSingleSeekerData(data);
    };

    fetchSingleSeekerData();
  }, [id]);

  return (
    <div>
      {/* Header */}
    <div
      className="bg-indigo-50">
      <div
        className="container mx-auto lg:grid grid-cols-12 pt-20 lg:pt-32 lg:px-16 lg:pb-20 pb-8 items-center">
        {/* img start */}
        <div className="col-span-1 mt-2">
          <Image
            className="rounded-lg hidden lg:block"
            width={500}
            height={500}
            src={image}
            alt="image">
          </Image>
          <div
            className="flex items-center justify-center">
            <Image
              className="rounded-lg lg:hidden block"
              width={100}
              height={100}
              src={image}
              alt="image">
            </Image>
          </div>
        </div>
        {/* img end */}

        {/* text */}
        <div
          className="col-span-8 lg:ml-7">
          <h1
            className="mt-5 lg:mt-0 my-2 text-xl lg:text-3xl font-bold lg:font-semibold text-center lg:text-start">
            {seekerName}
          </h1>
          {/* icon */}
          <div
            className="lg:flex lg:gap-4 lg:my-4 grid grid-cols-2">
            <div
              className="flex items-center justify-center gap-1 my-2 lg:my-0">
              <IoBagCheckOutline className="text-xl flex items-center justify-center text-gray-500" />
              <p
                className="font-bold pt-1 text-gray-500 flex items-center justify-center text-base">
                {findingJobTitle}
              </p>
            </div>
            <div
              className="flex items-center justify-center gap-1 my-2 lg:my-0">
              <CiLocationOn className="text-xl flex items-center justify-center text-gray-500" />
              <p
                className="font-medium text-gray-500 flex items-center justify-center text-sm">
               London, UK
              </p>
            </div>
            <div
              className="flex items-center justify-center gap-1 my-2 lg:my-0">
              <BsClock className="text-xl flex items-center justify-center text-gray-500" />
              <p
                className="font-medium text-gray-500 flex items-center justify-center text-sm">
                {seekerJobTime}
              </p>
            </div>
            <div
              className="flex items-center justify-center gap-1 my-2 lg:my-0">
              <PiCurrencyCircleDollarDuotone className="text-xl flex items-center justify-center text-gray-500" />
              <p
                className="font-medium text-gray-500 flex items-center justify-center text-sm">
                $99 / hour
              </p>
            </div>
            <div
              className="flex items-center justify-center gap-1 my-2 lg:my-0 col-span-2">
              <TbUserStar className="text-2xl flex items-center justify-center text-gray-500" />
              <p
                className="font-medium text-gray-500 flex items-center justify-center text-sm">
               {jobExperience}
              </p>
            </div>

          </div>
          {/* icon */}

          {/* badge */}
          <div
            className="lg:flex lg:gap-5 mt-2 mb-3 lg:my-0 grid grid-cols-2 lg:grid-cols-3">
            <div
              className="text-xs mt-2 flex justify-center items-center">
              <span
                className="bg-blue-100 rounded-full py-2 px-4 text-blue-600 font-semibold">
                {skills?.skillOne}
              </span>
            </div>
            <div
              className="text-xs mt-2  flex justify-center items-center">
              <span
                className="bg-blue-100 rounded-full py-2 px-4 text-blue-600 font-semibold">
                {skills?.skillTwo}
              </span>
            </div>
            <div
            
              className="text-xs mt-3 flex justify-center items-center col-span-2 lg:mt-2">
              <span
                className="bg-blue-100 rounded-full py-2 px-4 text-blue-600 font-semibold">
                {skills?.skillThree}
              </span>
            </div>
          </div>
          {/* badge */}

        </div>
        {/* text */}

        {/* apply button */}
        <div
          className="col-span-3 mt-6 grid grid-rows-2 mx-6 lg:mx-0">
          <button
            onClick={() => window.my_modal_4.showModal()}
            className="bg-blue-600 py-4 flex items-center justify-center text-white rounded-lg hover:bg-blue-700 mb-4 font-semibold">
            Hire Me
          </button>
          <dialog
            id="my_modal_4"
            className="modal">
            <form
              method="dialog"
              className="modal-box  max-w-xl">
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <h3
                className="font-bold text-lg text-center my-5">
                Hire Me
              </h3>

              {/* file input */}
              <input
                type="file"
                className="file-input file-input-bordered file-input-info  w-full font-semibold" />
              {/* file input */}

              {/* text area */}
              <textarea
                className="w-full bg-indigo-50 rounded-lg font-medium text-sm pb-16 pt-4 px-5 mt-6 mb-2 outline-none focus:border-transparent focus:ring-2 focus:ring-blue-300"
                placeholder="Write Your Message Here...">
              </textarea>
              {/* text area */}

              {/* checkbox */}
              <div
                className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="checkbox checkbox-info checkbox-sm" />
                <p
                  className="text-xs font-medium text-gray-400">
                  You accept our Terms and Conditions and Privacy Policy
                </p>
              </div>
              {/* checkbox */}
              <button
                className="w-full mt-6 mb-2 bg-blue-600 py-4 flex items-center justify-center text-white rounded-lg hover:bg-blue-700">
                Hire Me
              </button>
            </form>
          </dialog>
          <button
            className="bg-blue-100 py-4 flex items-center justify-center rounded-lg text-blue-600 hover:bg-blue-700 hover:text-white duration-500 w-full mb-4" >
            <PiBookmarkSimple className="text-3xl" />
          </button>
        </div>
        {/* apply button */}
      </div>
    </div>

    {/* Header */}
    </div>
  );
};

export default SingleSeekerPage;
