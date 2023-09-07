"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsClock, BsFillPersonFill, BsHourglass } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoBagCheckOutline, IoCalendarOutline, IoLanguageOutline } from "react-icons/io5";
import { PiBookmarkSimple, PiCurrencyCircleDollarDuotone, PiGraduationCapDuotone } from "react-icons/pi";
import { FaCoins, FaMedal } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";

const SingleSeekerPage = ({ params }) => {
  const [singleSeekerData, setSingleSeekerData] = useState([]);
  //   use console log to see what data have singleHrData, then continue design

  const { id } = params;

  console.log(singleSeekerData)
  const { education, findingJobTitle, image, jobExperience, seekerEmail, seekerJobTime, seekerName, skills, aboutMyself } = singleSeekerData

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
          className="container mx-auto lg:grid grid-cols-12 pt-20 lg:px-16 lg:pb-12 pb-8 items-center">
          {/* img start */}
          <div className="col-span-1 mt-2">
            <Image
              className="rounded-lg hidden lg:block"
              width={500}
              height={500}
              src={image}
              alt="Seekers Image">
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
            className="col-span-8 lg:ml-7 mt-8">
            <div
              className="flex">
              <h1
                className="mt-2 text-xl lg:text-3xl font-bold lg:font-semibold text-center lg:text-start">
                {seekerName}
              </h1>
              <p
                className="flex items-end justify-center font-semibold text-lg ms-2">
                - ({findingJobTitle})
              </p>
            </div>
            {/* icon */}
            <div
              className="lg:flex lg:gap-4 lg:my-4 grid grid-cols-2">
              <div
                className="flex items-center justify-center gap-1 my-2 lg:my-0">
                <IoBagCheckOutline className="text-xl flex items-end text-gray-500" />
                <p
                  className="font-semibold text-gray-500 flex items-center justify-center text-sm mt-1 ms-1">
                  {seekerJobTime}
                </p>
              </div>
              <div
                className="flex items-center justify-center gap-1 my-2 lg:my-0">
                <CiLocationOn className="text-xl flex items-end text-gray-500" />
                <p
                  className="font-semibold text-gray-500 flex items-center justify-center text-sm mt-1">
                  London, UK
                </p>
              </div>
              <div
                className="flex items-center justify-center gap-1 my-2 lg:my-0">
                <BsClock className="text-xl flex items-end text-gray-500" />
                <p
                  className="font-semibold text-gray-500 flex items-center justify-center text-sm mt-1 ms-1">
                  {seekerJobTime}
                </p>
              </div>
              <div
                className="flex items-center justify-center gap-1 my-2 lg:my-0">
                <PiCurrencyCircleDollarDuotone className="text-xl flex items-center justify-center text-gray-500" />
                <p
                  className="font-semibold text-gray-500 flex items-center justify-center text-sm mt-1">
                  $99 / hour
                </p>
              </div>
              <div
                className="flex items-center justify-center gap-1 my-2 lg:my-0 col-span-2">
                <FaMedal className="text-xl flex items-end text-yellow-500" />
                <p
                  className="font-semibold text-gray-500 flex items-center justify-center text-sm mt-1">
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
      {/* Header section end */}

      {/* main body section start */}
      <div
        className="container mx-auto mt-10">
        <div
          className="w-[92%] mx-auto grid grid-cols-12">
          {/* right side div start */}
          <div
            className="col-span-8">
            <h2
              className="text-xl font-bold">
              Candidates About
            </h2>
            <p
              className="text-gray-500 font-semibold text-sm mt-3 lg:mr-20">
              <p>Hello my name is Nicole Wells and web developer from Portland. In pharetra orci dignissim, blandit mi semper, ultricies diam. Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla id orci laoreet tempor non consequat enim. Sed vitae aliquam velit. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam.

                Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem ut elementum aliquam. Mauris nec erat ut libero vulputate pulvinar.
                </p>
              {aboutMyself}
            </p>
          </div>
          {/* right side div end */}


          {/* left side div start */}
          <div
            className="col-span-4 mx-2">
            {/* 1st div */}
            <div
              className="bg-indigo-50 rounded-xl px-7 pt-10 pb-2 mb-10">
              <h1
                className="text-xl font-bold">
                Seekers Overview
              </h1>

              {/* icons */}
              <div>

                {/* Experience */}
                <div
                  className="flex gap-5 my-7">
                  <IoCalendarOutline className="text-blue-500 text-2xl" />
                  <div>
                    <p
                      className="font-semibold">
                      Experience:
                    </p>
                    <p
                      className="text-gray-500 font-medium my-1 text-xs">
                      0-{jobExperience} Years
                    </p>
                  </div>
                </div>
                {/* Experience */}

                {/* Age: */}
                <div
                  className="flex gap-5 my-7">
                  <BsHourglass className="text-blue-500 text-2xl" />
                  <div>
                    <p
                      className="font-semibold">
                      Age:
                    </p>
                    <p
                      className="text-gray-500 font-medium my-1 text-xs">
                      20-24 Years
                    </p>
                  </div>
                </div>
                {/* Age: */}

                {/* Current Salary: */}
                <div
                  className="flex gap-5 my-7">
                  <FaCoins className="text-blue-500 text-2xl" />
                  <div>
                    <p
                      className="font-semibold">
                      Current Salary:
                    </p>
                    <p
                      className="text-gray-500 font-medium my-1 text-xs">
                      11K - 15K
                    </p>
                  </div>
                </div>
                {/* Current Salary: */}

                {/* Expected Salary: */}
                <div
                  className="flex gap-5 my-7">
                  <GiMoneyStack className="text-blue-500 text-2xl" />
                  <div>
                    <p
                      className="font-semibold">
                      Expected Salary:
                    </p>
                    <p
                      className="text-gray-500 font-medium my-1 text-xs">
                      26K - 30K
                    </p>
                  </div>
                </div>
                {/* Expected Salary: */}

                {/* Gender: */}
                <div
                  className="flex gap-5 my-7">
                  <BsFillPersonFill className="text-blue-500 text-2xl" />
                  <div>
                    <p
                      className="font-semibold">
                      Gender:
                    </p>
                    <p
                      className="text-gray-500 font-medium my-1 text-xs">
                      Male
                    </p>
                  </div>
                </div>
                {/* Gender: */}

                {/* Language: */}
                <div
                  className="flex gap-5 my-7">
                  <IoLanguageOutline className="text-blue-500 text-2xl" />
                  <div>
                    <p
                      className="font-semibold">
                      Language:
                    </p>
                    <p
                      className="text-gray-500 font-medium my-1 text-xs">
                      English, German, Spanish
                    </p>
                  </div>
                </div>
                {/* Language: */}

                {/* Education: */}
                <div
                  className="flex gap-5 my-7">
                  <PiGraduationCapDuotone className="text-blue-500 text-2xl" />
                  <div>
                    <p
                      className="font-semibold">
                      Salary:
                    </p>
                    <p
                      className="text-gray-500 font-medium my-1 text-xs">
                      {education}
                    </p>
                  </div>
                </div>
                {/* Education: */}
              </div>
              {/* icons */}


            </div>
            {/* 1st div */}
            {/* social div */}
            <div className="bg-indigo-50 rounded-xl px-7 py-3  mb-7">
              <div
                className="my-5 flex justify-between">
                <p
                  className="font-semibold">
                  Social media
                </p>
                <p
                  className="flex gap-2 cursor-pointer">
                  <BiLogoFacebook className="text-2xl text-gray-600 hover:text-pink-500 duration-300" />
                  <BiLogoInstagram className="text-2xl text-gray-600 hover:text-pink-500 duration-300" />
                  <BiLogoTwitter className="text-2xl text-gray-600 hover:text-pink-500 duration-300" />
                  <BiLogoLinkedin className="text-2xl text-gray-600 hover:text-pink-500 duration-300" />
                </p>
              </div>
            </div>
            {/* social div */}


            {/* skill div */}
            <div className="bg-indigo-50 rounded-xl px-7 pt-10 pb-1 mb-10">
              {/* job skills */}
              <div>
                <h1
                  className="text-xl font-semibold mt-4">
                  Professional Skills
                </h1>

                <div
                  className="grid grid-cols-3 gap-3 my-4">
                  {/* skillOne */}
                  <div
                    className="bg-white flex items-center justify-center rounded-lg py-2 font-semibold text-gray-500 text-xs text-center">
                    <p>
                      {skills?.skillOne}
                    </p>
                  </div>
                  {/* skillOne */}

                  {/* skillTWo */}
                  <div
                    className="bg-white flex items-center justify-center rounded-lg py-2 font-semibold text-gray-500 text-xs text-center">
                    <p>
                      {skills?.skillOne}
                    </p>
                  </div>
                  {/* skillTwo */}

                  {/* skillThree */}
                  <div
                    className="bg-white flex items-center justify-center rounded-lg py-2 font-semibold text-gray-500 text-xs">
                    <p>
                      {skills?.skillThree}
                    </p>
                  </div>

                  <div
                    className="bg-white flex items-center justify-center rounded-lg py-2 font-semibold text-gray-500 text-xs">
                    <p>
                      Wordpress
                    </p>
                  </div>

                  <div
                    className="bg-white flex items-center justify-center rounded-lg py-2 font-semibold text-gray-500 text-xs">
                    <p>
                      Design
                    </p>
                  </div>
                  {/* skillThree */}
                </div>

              </div>
              {/* job skills */}
            </div>
            {/* skill div */}

            {/* contact Div */}
            <div className="bg-indigo-50 rounded-xl px-7 py-3  mb-7 text-xl">
              <h2 className="text-xl font-semibold mt-4">Contact Us</h2>
              {/* form */}
              <div className="mx-auto mt-5 mb-3 ">
                {/* name */}
              <input type="text" placeholder="Your Name" className="input input-bordered w-full py-8" />
                {/* email */}
              <input type="email" placeholder="Email Address" className="input input-bordered w-full my-3 py-8" />
              {/* text area */}
              <textarea className="textarea textarea-bordered w-full h-40" placeholder="Message"></textarea>

              <button  className="btn bg-[#40e1f9] px-10 p-3 rounded-lg text-white hover:bg-transparent hover:text-[#40e1f9] hover:font-extrabold hover:border-y-2 hover:border-x-2 hover:border-[#40e1f9] ease-out duration-300 mt-3 w-full">Send Message</button>
              </div>
              {/* form */}
            </div>
            {/* contact Div */}


          </div>
          {/* left side div end */}
        </div>
      </div>
      {/* main body section end */}
    </div>
  );
};

export default SingleSeekerPage;
