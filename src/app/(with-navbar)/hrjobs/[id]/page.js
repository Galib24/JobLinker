"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter, BiSolidCoinStack, BiTime } from "react-icons/bi";
import { BsBookmark, BsClock, BsDot, BsFillBagPlusFill, BsFillBookmarkFill, BsFillPersonFill, BsFillStarFill, BsHourglass } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";

const SingleHRPage = ({ params }) => {
  const [singleHrData, setSingleHrData] = useState([]);

  const { id } = params;


  const { HrEmail, companyDetails, companyLogo, jobDescription, jobNeed, jobPlace, jobTitle, jobType, location, rating, salaryRange } = singleHrData

  // get the data
  useEffect(() => {
    const fetchSingleHrData = async () => {
      const response = await fetch(`/api/hr/${id}`);
      const data = await response.json();
      setSingleHrData(data);
    };

    fetchSingleHrData();
  }, [id]);

  console.log(singleHrData);


  return <div>

    {/* Header */}

    <div className="lg:grid grid-cols-12 bg-indigo-50 pt-32 px-16 pb-20 items-center">

      {/* img start */}
      <div className="col-span-1 mt-2">
        <Image
          className="rounded-lg"
          width={500}
          height={500}
          src={companyLogo}
          alt="company logo"
        />

      </div>
      {/* img end */}


      {/* text */}
      <div className="col-span-8 ml-5 mt-5">

        <h1 className="mt-5 lg:mt-0 my-2 lg:text-2xl font-semibold">{jobTitle}</h1>
        {/* icon */}
        <div className="lg:flex gap-4 my-4">
          <div className="flex items-center gap-1 my-3 lg:my-0">
            <BsFillBagPlusFill></BsFillBagPlusFill>
            <p>{jobPlace}</p>
          </div>
          <div className="flex items-center gap-1 my-3 lg:my-0">
            <IoLocationSharp></IoLocationSharp>
            <p>{location}</p>
          </div>
          <div className="flex items-center gap-1 my-3 lg:my-0">
            <BsClock></BsClock>
            <p>11 hours ago</p>
          </div>
          <div className="flex items-center gap-1 my-3 lg:my-0"><GiMoneyStack></GiMoneyStack>
            <p>{salaryRange}</p></div>
          <div className="flex items-center gap-1 my-3 lg:my-0">
            <BsFillStarFill></BsFillStarFill>
            {rating}
          </div>

        </div>
        {/* icon */}

        {/* badge */}
        <div className="flex gap-5 mt-5 my-8 lg:my-0">
          <div className="text-xs">
            <span className="bg-blue-200 rounded-full py-1 px-4 text-blue-600 font-semibold">
              {jobType}
            </span>
          </div>
          <div className="text-xs">
            <span className="bg-yellow-100 text-yellow-600 font-semibold rounded-full py-1 px-4">
              {singleHrData?.jobNeed}
            </span>
          </div>
        </div>
        {/* badge */}

      </div>
      {/* text */}

      {/* apply button */}
      <div className="col-span-3 flex mt-5">
        <button onClick={() => window.my_modal_3.showModal()} className="bg-blue-600 py-4 px-12 flex items-center justify-center text-white rounded-lg">Apply For Job</button>
        <dialog id="my_modal_3" className="modal">
          <form method="dialog" className="modal-box  max-w-xl">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <h3 className="font-bold text-lg text-center my-5">Apply for this job</h3>

            {/* file input */}
            <input type="file" className="file-input file-input-bordered file-input-info w-full" />
            {/* file input */}

            {/* text area */}
            <textarea className="w-full bg-indigo-50 my-5 py-10 px-5 rounded-lg font-semibold" placeholder="Cover Letter"></textarea>
            {/* text area */}

            {/* checkbox */}
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                className="checkbox checkbox-info" />
              <p>You accept our Terms and Conditions and Privacy Policy</p>
            </div>
            {/* checkbox */}

            <button className="w-full mt-8 mb-2 bg-blue-600 py-4 px-12 flex items-center justify-center text-white rounded-lg">Apply Job</button>

          </form>
        </dialog>
        <button className="bg-blue-50 px-4 py-4 flex items-center justify-center rounded-lg shadow-xl text-blue-500 hover:bg-blue-600 hover:text-white ml-3 duration-500" ><BsBookmark className="text-xl"></BsBookmark></button>

      </div>
      {/* apply button */}
    </div>
    {/* Header */}

    {/* body part */}
    <div className="lg:grid grid-cols-12 mt-20 px-10 lg:gap-20">

      {/* left-side */}
      <div className="col-span-8">
        {/* job description */}
        <div>
          <h1 className="text-xl font-semibold">Job Description</h1>
          <p className="my-5 text-gray-600">{jobDescription}</p>

        </div>
        {/* job description */}

        {/* Skill & Experience */}
        <div className="mt-5 lg:mt-20 mb-10">
          <h1 className="text-xl font-semibold">Skill & Experience</h1>

          <div className="flex gap-5 items-center">
            <BsDot className="text-3xl font-bold"></BsDot>
            <p className="mt-8 mb-5">You have at least 3 years’ experience working as a Product Designer.</p>
          </div>

          <div className="flex gap-5 items-center">
            <BsDot className="text-3xl font-bold"></BsDot>
            <p className="my-5">You have experience using Sketch and InVision or Framer X.</p>
          </div>

          <div className="flex gap-5 items-center">
            <BsDot className="text-3xl font-bold"></BsDot>
            <p className="my-5">You have some previous experience working in an agile environment – Think two-week sprints.</p>
          </div>

          <div className="flex gap-2 items-center">
            <BsDot className="text-3xl font-bold"></BsDot>
            <p className="my-5">You are familiar using Jira and Confluence in your workflow</p>
          </div>

        </div>
        {/* Skill & Experience */}

        {/* share job icon */}
        <div>
          <h1 className="text-xl font-semibold">Share this job</h1>
          <div className="lg:flex gap-3 mt-4">
            <button className=" bg-blue-600 py-4 px-12 flex items-center justify-center text-white rounded-lg"><BiLogoFacebook></BiLogoFacebook> <span className="ml-3">FaceBook</span> </button>

            <button className=" bg-sky-500 py-4 px-12 flex items-center justify-center text-white rounded-lg my-3 lg:my-0"><BiLogoTwitter></BiLogoTwitter> <span className="ml-3">Twitter</span> </button>

            <button className=" bg-blue-500 py-4 px-12 flex items-center justify-center text-white rounded-lg mt-3 lg:my-0 mb-6"><BiLogoLinkedin></BiLogoLinkedin> <span className="ml-3">Linkedin</span> </button>
          </div>
        </div>
        {/* share job icon */}
      </div>
      {/* left-side */}

      {/* right-side */}
      <div className="col-span-4">

        {/* job details */}
        <div className="bg-indigo-50 rounded-xl px-7 py-10 mb-10">
          <h1 className="text-xl font-semibold">Job Overview</h1>

          {/* icons */}
          <div>

            {/* calendar */}
            <div className="flex gap-5 my-6">
              <AiOutlineCalendar className="text-blue-500 text-2xl"></AiOutlineCalendar>
              <div>
                <p className="font-semibold">Date Posted:</p>
                <p>Posted 1 hours ago</p>
              </div>
            </div>
            {/* calendar */}

            {/* Expiration */}
            <div className="flex gap-5 my-6">
              <BsHourglass className="text-blue-500 text-2xl"></BsHourglass>
              <div>
                <p className="font-semibold">Expiration date:</p>
                <p>April 06, 2024</p>
              </div>
            </div>
            {/* Expiration */}

            {/* location */}
            <div className="flex gap-5 my-6">
              <CiLocationOn className="text-blue-500 text-2xl"></CiLocationOn>
              <div>
                <p className="font-semibold">Location:</p>
                <p>{location}</p>
              </div>
            </div>
            {/* location */}

            {/* Job Title: */}
            <div className="flex gap-5 my-6">
              <BsFillPersonFill className="text-blue-500 text-2xl"></BsFillPersonFill>
              <div>
                <p className="font-semibold">Job Title:</p>
                <p>{jobTitle}</p>
              </div>
            </div>
            {/* Job Title: */}

            {/* Hours: */}
            <div className="flex gap-5 my-6">
              <BiTime className="text-blue-500 text-2xl"></BiTime>
              <div>
                <p className="font-semibold">Hours:</p>
                <p>50h / week</p>
              </div>
            </div>
            {/* Hours: */}

            {/* Rate: */}
            <div className="flex gap-5 my-6">
              <BiSolidCoinStack className="text-blue-500 text-2xl"></BiSolidCoinStack>
              <div>
                <p className="font-semibold">Rate:</p>
                <p>$15 - $25 / hour</p>
              </div>
            </div>
            {/* Rate: */}

            {/* Salary: */}
            <div className="flex gap-5 my-6">
              <GiMoneyStack className="text-blue-500 text-2xl"></GiMoneyStack>
              <div>
                <p className="font-semibold">Salary:</p>
                <p>{salaryRange}</p>
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
              <div className="bg-white shadow-md  flex items-center justify-center rounded-lg py-2 font-medium">
                <p>CSS</p>
              </div>
              {/* skillOne */}

              {/* skillTWo */}
              <div className="bg-white shadow-md flex items-center justify-center rounded-lg py-2 font-medium">
                <p>React</p>
              </div>
              {/* skillTwo */}

              {/* skillThree */}
              <div className="bg-white shadow-md  flex items-center justify-center rounded-lg py-2 font-medium">
                <p>Next.js</p>
              </div>
              {/* skillThree */}
            </div>

          </div>
          {/* job skills */}
        </div>

        {/* company details */}
        <div className="bg-indigo-50 rounded-xl px-7 py-10 mb-10">

          {/* company logo & name */}
          <div className="flex gap-5 items-center">

            <Image
              className="rounded-lg"
              width={100}
              height={100}
              src={companyLogo}
              alt="company logo"
            />
            {/* company name */}
            <p className="font-semibold">Company name</p>
            {/* company name */}
          </div>
          {/* company logo & name */}

          {/* industry name */}
          <div className="mt-10 mb-5 flex justify-between">
            <p>Primary industry :</p>
            <p>Software</p>
          </div>
          {/* industry name */}

          {/* Company size: */}
          <div className="my-5 flex justify-between">
            <p>Company size :</p>
            <p>500-1,000</p>
          </div>
          {/* Company size: */}

          {/* Founded in: */}
          <div className="my-5 flex justify-between">
            <p>Founded in :</p>
            <p>2011</p>
          </div>
          {/* Founded in: */}

          {/* Phone: */}
          <div className="my-5 flex justify-between">
            <p>Phone :</p>
            <p>123 456 7890</p>
          </div>
          {/* Phone: */}

          {/* Email: */}
          <div className="my-5 lg:flex justify-between">
            <p>Email :</p>
            <p>{HrEmail}</p>
          </div>
          {/* Email: */}

          {/* Location: */}
          <div className="my-5 flex justify-between">
            <p>Location :</p>
            <p>{location}</p>
          </div>
          {/* Location: */}

          {/* Social media: */}
          <div className="my-5 flex justify-between">
            <p>Social media :</p>
            <p className="flex gap-2 cursor-pointer">
              <BiLogoFacebook className="hover:text-pink-500 duration-300"></BiLogoFacebook>
              <BiLogoInstagram className="hover:text-pink-500 duration-300"></BiLogoInstagram>
              <BiLogoTwitter className="hover:text-pink-500 duration-300"></BiLogoTwitter>
              <BiLogoLinkedin className="hover:text-pink-500 duration-300"></BiLogoLinkedin>
            </p>
          </div>
          {/* Social media: */}



        </div>
        {/* company details */}
      </div>



      {/* right-side */}

    </div>
    {/* body part */}

  </div>;
};

export default SingleHRPage;
