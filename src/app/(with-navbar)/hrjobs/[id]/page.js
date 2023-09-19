"use client";

import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiStar,
} from "react-icons/bi";
import { BsClock, BsCoin, BsDot, BsHourglass } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoBagCheckOutline, IoCalendarOutline } from "react-icons/io5";
import {
  PiBookmarkSimple,
  PiClockClockwise,
  PiCurrencyCircleDollarDuotone,
} from "react-icons/pi";
import {
  FaLinkedin,
  FaMoneyBill1Wave,
  FaSquareFacebook,
  FaTwitter,
} from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import Link from "next/link";
import GetSpecificUsers from "@/utilities/getSpecificUsers/getSpecificUsers";
import toast from "react-hot-toast";
import { AuthContext } from "@/provider/AuthProvider";
import GetSeekerJobApplyFromDB from "@/database/dataFromMongoDB/getSeekerJobApplyFromDB";

const SingleHRPage = ({ params }) => {
  const [singleHrData, setSingleHrData] = useState([]);

  // collect user from Auth
  const { user } = useContext(AuthContext);

  const { id } = params;

  const {
    _id,
    HrEmail,
    companyDetails,
    companyLogo,
    jobDescription,
    jobNeed,
    jobPlace,
    jobTitle,
    jobType,
    location,
    rating,
    salaryRange,
  } = singleHrData;

  // get the data
  useEffect(() => {
    const fetchSingleHrData = async () => {
      const response = await fetch(`/api/hr/${id}`);
      const data = await response.json();
      setSingleHrData(data);
    };
    fetchSingleHrData();
  }, [id]);

  // get matched user for some error functionality
  const { matchedUser } = GetSpecificUsers();

  const userRole = matchedUser?.role;

  const isAdmin = userRole === "admin";
  const isHr = userRole === "hr";

  // ref for collecting user resume link and text description
  const resumeFieldRef = useRef();
  const messageFieldRef = useRef();

  const [seekerApplies] = GetSeekerJobApplyFromDB();
  const matchedApplyData = seekerApplies?.find(
    (item) => item.beforeDataId === singleHrData._id
  );
  // console.log(matchedApplyData);

  // handle job apply
  const handleJobApply = async () => {
    // error toast for admin
    if (isAdmin) {
      toast.error("You are admin");
      return;
    }

    // error toast for hr
    if (isHr) {
      toast.error("HR can't apply for jobs");
      return;
    }

    const resumeLink = resumeFieldRef?.current?.value;
    const shouldHiredMessage = messageFieldRef?.current?.value;

    if (matchedApplyData) {
      toast.error("Opps!!, Already applied here!");
      return;
    }

    const applyDetails = {
      jobTitle,
      companyLogo,
      HrEmail,
      jobPlace,
      location,
      salaryRange,
      jobType,
      jobNeed,
      rating,
      jobDescription,
      companyDetails,
      beforeDataId: _id,
      seekerEmail: user?.email,
      seekerResumeLink: resumeLink,
      seekerAnsForShouldHire: shouldHiredMessage,
    };

    // function to post data to database
    try {
      const response = await fetch("/api/seekerJobApply", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(applyDetails),
      });

      if (response.ok) {
        toast.success("Your application has submitted");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-indigo-50">
        <div className="container mx-auto lg:grid grid-cols-12 pt-20 lg:pt-32 lg:px-16 lg:pb-20 pb-8 items-center">
          {/* img start */}
          <div className="col-span-1 mt-2">
            <Image
              className="rounded-lg hidden lg:block"
              width={500}
              height={500}
              src={companyLogo}
              alt="company logo"
            ></Image>
            <div className="flex items-center justify-center">
              <Image
                className="rounded-lg lg:hidden block"
                width={100}
                height={100}
                src={companyLogo}
                alt="company logo"
              ></Image>
            </div>
          </div>
          {/* img end */}

          {/* text */}
          <div className="col-span-8 lg:ml-7">
            <h1 className="mt-5 lg:mt-0 my-2 text-xl lg:text-3xl font-bold lg:font-semibold text-center lg:text-start">
              {jobTitle}
            </h1>
            {/* icon */}
            <div className="lg:flex lg:gap-4 lg:my-4 grid grid-cols-2">
              <div className="flex items-center justify-center gap-1 my-2 lg:my-0">
                <IoBagCheckOutline className="text-xl flex items-center justify-center text-gray-500" />
                <p className="font-medium text-gray-500 flex items-center justify-center text-sm">
                  {jobPlace}
                </p>
              </div>
              <div className="flex items-center justify-center gap-1 my-2 lg:my-0">
                <CiLocationOn className="text-xl flex items-center justify-center text-gray-500" />
                <p className="font-medium text-gray-500 flex items-center justify-center text-sm">
                  {location}
                </p>
              </div>
              <div className="flex items-center justify-center gap-1 my-2 lg:my-0">
                <BsClock className="text-xl flex items-center justify-center text-gray-500" />
                <p className="font-medium text-gray-500 flex items-center justify-center text-sm">
                  11 hours ago
                </p>
              </div>
              <div className="flex items-center justify-center gap-1 my-2 lg:my-0">
                <PiCurrencyCircleDollarDuotone className="text-xl flex items-center justify-center text-gray-500" />
                <p className="font-medium text-gray-500 flex items-center justify-center text-sm">
                  {salaryRange}
                </p>
              </div>
              <div className="flex items-center justify-center gap-1 my-2 lg:my-0 col-span-2">
                <BiStar className="text-xl flex items-center justify-center text-gray-500" />
                <p className="font-medium text-gray-500 flex items-center justify-center text-sm">
                  {rating}
                </p>
              </div>
            </div>
            {/* icon */}

            {/* badge */}
            <div className="lg:flex lg:gap-5 mt-2 mb-3 lg:my-0 grid grid-cols-3">
              <div className="text-xs mt-2 flex justify-center items-center">
                <span className="bg-blue-100 rounded-full py-1 px-5 text-blue-600">
                  {jobType}
                </span>
              </div>
              <div className="text-xs mt-2  flex justify-center items-center">
                <span className="bg-green-200 text-green-600 rounded-full py-1 px-5">
                  Privet
                </span>
              </div>
              <div className="text-xs mt-2 flex justify-center items-center">
                <span className="bg-orange-100 text-orange-600 rounded-full py-1 px-5">
                  {singleHrData?.jobNeed}
                </span>
              </div>
            </div>
            {/* badge */}
          </div>
          {/* text */}

          {/* apply button */}
          <div className="col-span-3 mt-6 grid grid-rows-2 mx-6 lg:mx-0">
            <button
              onClick={() => window.my_modal_1.showModal()}
              className="bg-blue-600 py-4 flex items-center justify-center text-white rounded-lg hover:bg-blue-700 mb-4 font-semibold"
            >
              Apply For Job
            </button>
            <dialog id="my_modal_1" className="modal">
              <form method="dialog" className="modal-box  max-w-xl">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
                <h3 className="font-bold text-lg text-center my-5">
                  Apply For This Job
                </h3>

                {/* resume link */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Resume Drive Link- must be shareable for all*
                    </span>
                  </label>
                  <input
                    type="text"
                    ref={resumeFieldRef}
                    placeholder="resume here"
                    className="w-full p-2 rounded border-[1px] border-black"
                  />
                </div>

                {/* text area */}
                <div className="form-control flex flex-col mt-6">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Why should you be hired for this role?
                    </span>
                  </label>
                  <textarea
                    name="massage"
                    ref={messageFieldRef}
                    id=""
                    rows="2"
                    placeholder="write something..."
                    className="bg-transparent border-[1px] p-2 mb-3 rounded border-black"
                  ></textarea>
                </div>

                {/* checkbox */}
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-info checkbox-sm"
                  />
                  <p className="text-xs font-medium text-gray-400">
                    You accept our Terms and Conditions and Privacy Policy
                  </p>
                </div>
                {/* checkbox */}

                <button
                  onClick={handleJobApply}
                  className="w-full mt-6 mb-2 bg-blue-600 py-4 flex items-center justify-center text-white rounded-lg hover:bg-blue-700"
                >
                  Apply To This Job
                </button>
              </form>
            </dialog>

            <button className="bg-blue-100 py-4 flex items-center justify-center rounded-lg text-blue-600 hover:bg-blue-700 hover:text-white duration-500 w-full mb-4">
              <PiBookmarkSimple className="text-3xl" />
            </button>
          </div>
          {/* apply button */}
        </div>
      </div>

      {/* Header */}

      {/* body part */}
      <div className="container mx-auto lg:grid grid-cols-12 mt-14 px-4 lg:px-10 lg:gap-20">
        {/* left-side */}
        <div className="col-span-8">
          {/* job description */}
          <div>
            <h1 className="text-2xl lg:text-xl font-bold mb-3 text-center lg:text-left">
              Job Description
            </h1>
            <p className="text-gray-500 font-medium text-center lg:text-left">
              {jobDescription}
            </p>
          </div>
          {/* job description */}

          {/* Skill & Experience */}
          <div className="mt-5 lg:mt-10 mb-3">
            <h1 className="text-2xl lg:text-xl font-bold mb-3 text-center lg:text-left mt-10">
              Skill & Experience
            </h1>

            <div className="flex items-center mt-5 my-2">
              <BsDot className="text-3xl font-bold flex items-center justify-center mr-4" />
              <p className="text-gray-500 font-medium">
                You have at least 3 years’ experience working as a Product
                Designer.
              </p>
            </div>

            <div className="flex items-center my-2">
              <BsDot className="text-3xl font-bold flex items-center justify-center mr-4" />
              <p className="text-gray-500 font-medium">
                You have experience using Sketch and InVision or Framer X.
              </p>
            </div>

            <div className="flex items-center my-2">
              <BsDot className="text-3xl font-bold flex items-center justify-center mr-4" />
              <p className="text-gray-500 font-medium">
                You have some previous experience working in an agile
                environment – Think two-week sprints.
              </p>
            </div>

            <div className="flex items-center my-2">
              <BsDot className="text-3xl font-bold flex items-center justify-center mr-4" />
              <p className="text-gray-500 font-medium">
                You are familiar using Jira and Confluence in your workflow
              </p>
            </div>
          </div>
          {/* Skill & Experience */}

          {/* share job icon */}
          <div className="grid grid-cols-12 mt-14 font-medium mb-10 lg:mb-0">
            <h1 className="text-lg font-semibold flex items-center justify-center lg:col-span-2 col-span-12 mb-5 lg:mb-0">
              Share This Job :
            </h1>

            <div className="bg-[#3b5998] hover:bg-[#465e8e] flex items-center justify-center text-white rounded-lg col-span-4 lg:col-span-3 mx-2 text-xs py-3">
              <p>
                <FaSquareFacebook className="text-3xl" />
              </p>
              <p className="ms-2">Facebook</p>
            </div>

            <div className="bg-[#55acee] hover:bg-[#6eb3e8] flex items-center justify-center text-white rounded-lg col-span-4 lg:col-span-3 mx-2 text-xs py-3">
              <p>
                <FaTwitter className="text-3xl" />
              </p>
              <p className="ms-2">Twitter</p>
            </div>

            <div className="bg-[#0072b1] hover:bg-[#0073b1e7] flex items-center justify-center text-white rounded-lg col-span-4 lg:col-span-3 mx-2 text-xs py-3">
              <p>
                <FaLinkedin className="text-3xl" />
              </p>
              <p className="ms-2">Linkedin</p>
            </div>
          </div>
          {/* share job icon */}
        </div>
        {/* left-side */}

        {/* right-side */}
        <div className="col-span-4">
          {/* job details */}
          <div className="bg-indigo-50 rounded-xl px-7 pt-10 pb-2 mb-10">
            <h1 className="text-xl font-bold">Job Overview</h1>

            {/* icons */}
            <div>
              {/* calendar */}
              <div className="flex gap-5 my-7">
                <IoCalendarOutline className="text-blue-500 text-2xl" />
                <div>
                  <p className="font-semibold">Date Posted:</p>
                  <p className="text-gray-500 font-medium my-1 text-xs">
                    Posted 1 hours ago
                  </p>
                </div>
              </div>
              {/* calendar */}

              {/* Expiration */}
              <div className="flex gap-5 my-7">
                <BsHourglass className="text-blue-500 text-2xl" />
                <div>
                  <p className="font-semibold">Expiration date:</p>
                  <p className="text-gray-500 font-medium my-1 text-xs">
                    April 06, 2024
                  </p>
                </div>
              </div>
              {/* Expiration */}

              {/* location */}
              <div className="flex gap-5 my-7">
                <CiLocationOn className="text-blue-500 text-2xl" />
                <div>
                  <p className="font-semibold">Location:</p>
                  <p className="text-gray-500 font-medium my-1 text-xs">
                    {location}
                  </p>
                </div>
              </div>
              {/* location */}

              {/* Job Title: */}
              <div className="flex gap-5 my-7">
                <GoPerson className="text-blue-500 text-2xl" />
                <div>
                  <p className="font-semibold">Job Title:</p>
                  <p className="text-gray-500 font-medium my-1 text-xs">
                    {jobTitle}
                  </p>
                </div>
              </div>
              {/* Job Title: */}

              {/* Hours: */}
              <div className="flex gap-5 my-7">
                <PiClockClockwise className="text-blue-500 text-2xl" />
                <div>
                  <p className="font-semibold">Hours:</p>
                  <p className="text-gray-500 font-medium my-1 text-xs">
                    50h / week
                  </p>
                </div>
              </div>
              {/* Hours: */}

              {/* Rate: */}
              <div className="flex gap-5 my-7">
                <BsCoin className="text-blue-500 text-2xl" />
                <div>
                  <p className="font-semibold">Rate:</p>
                  <p className="text-gray-500 font-medium my-1 text-xs">
                    $15 - $25 / hour
                  </p>
                </div>
              </div>
              {/* Rate: */}

              {/* Salary: */}
              <div className="flex gap-5 my-7">
                <FaMoneyBill1Wave className="text-blue-500 text-2xl" />
                <div>
                  <p className="font-semibold">Salary:</p>
                  <p className="text-gray-500 font-medium my-1 text-xs">
                    {salaryRange}
                  </p>
                </div>
              </div>
              {/* Salary: */}
            </div>
            {/* icons */}

            {/* job skills */}
            <div>
              <h1 className="text-xl font-semibold mt-4">Job Skills</h1>

              <div className="grid grid-cols-3 gap-3 my-4">
                {/* skillOne */}
                <div className="bg-white flex items-center justify-center rounded-lg py-2 font-semibold text-gray-500 text-xs">
                  <p>CSS</p>
                </div>
                {/* skillOne */}

                {/* skillTWo */}
                <div className="bg-white flex items-center justify-center rounded-lg py-2 font-semibold text-gray-500 text-xs">
                  <p>React</p>
                </div>
                {/* skillTwo */}

                {/* skillThree */}
                <div className="bg-white flex items-center justify-center rounded-lg py-2 font-semibold text-gray-500 text-xs">
                  <p>Next.js</p>
                </div>

                <div className="bg-white flex items-center justify-center rounded-lg py-2 font-semibold text-gray-500 text-xs">
                  <p>Wordpress</p>
                </div>

                <div className="bg-white flex items-center justify-center rounded-lg py-2 font-semibold text-gray-500 text-xs">
                  <p>Design</p>
                </div>
                {/* skillThree */}
              </div>
            </div>
            {/* job skills */}
          </div>

          {/* company details */}
          <div className="bg-indigo-50 rounded-xl px-7 pt-10 pb-1 mb-10">
            {/* company logo & name */}
            <div className="flex gap-5 items-start justify-start">
              <Image
                src={companyLogo}
                className="rounded-lg"
                alt="company logo"
                width={70}
                height={70}
              ></Image>

              {/* company name */}
              <div>
                <p className="font-medium ms-1 text-lg mb-1">Company Name</p>
                <Link
                  href="/"
                  className="bg-blue-100 text-blue-600 font-medium text-xs py-1 px-4 rounded-lg"
                >
                  Company Website
                </Link>
              </div>
              {/* company name */}
            </div>
            {/* company logo & name */}

            {/* industry name */}
            <div className="mt-6 flex justify-between">
              <p className="font-semibold">Primary industry :</p>
              <p className="text-gray-500 font-medium">Software</p>
            </div>
            {/* industry name */}

            {/* Company size: */}
            <div className="my-5 flex justify-between">
              <p className="font-semibold">Company size :</p>
              <p className="text-gray-500 font-medium">500-1,000</p>
            </div>
            {/* Company size: */}

            {/* Founded in: */}
            <div className="my-5 flex justify-between">
              <p className="font-semibold">Founded in :</p>
              <p className="text-gray-500 font-medium">2011</p>
            </div>
            {/* Founded in: */}

            {/* Phone: */}
            <div className="my-5 flex justify-between">
              <p className="font-semibold">Phone :</p>
              <p className="text-gray-500 font-medium">123 456 7890</p>
            </div>
            {/* Phone: */}

            {/* Email: */}
            <div className="my-5 lg:flex justify-between">
              <p className="font-semibold">Email :</p>
              <p className="text-gray-500 font-medium">{HrEmail}</p>
            </div>
            {/* Email: */}

            {/* Location: */}
            <div className="my-5 flex justify-between">
              <p className="font-semibold">Location :</p>
              <p className="text-gray-500 font-medium">{location}</p>
            </div>
            {/* Location: */}

            {/* Social media: */}
            <div className="my-5 flex justify-between">
              <p className="font-semibold">Social media :</p>
              <p className="flex gap-2 cursor-pointer">
                <BiLogoFacebook className="text-2xl text-gray-600 hover:text-pink-500 duration-300" />
                <BiLogoInstagram className="text-2xl text-gray-600 hover:text-pink-500 duration-300" />
                <BiLogoTwitter className="text-2xl text-gray-600 hover:text-pink-500 duration-300" />
                <BiLogoLinkedin className="text-2xl text-gray-600 hover:text-pink-500 duration-300" />
              </p>
            </div>
            {/* Social media: */}
          </div>
          {/* company details */}
        </div>
        {/* right-side */}
      </div>
      {/* body part */}
    </div>
  );
};

export default SingleHRPage;
