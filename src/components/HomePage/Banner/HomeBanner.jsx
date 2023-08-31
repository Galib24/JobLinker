import Image from "next/image";
import Link from "next/link";
import { BiMailSend } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa6";
import { PiNewspaperDuotone } from "react-icons/pi";

const HomeBanner = () => {
  return (

    <div
      className="mx-auto grid lg:grid-cols-5 pt-24 lg:pt-40 lg:px-14 px-4 bg-gradient-to-r from-cyan-50 to-blue-100 pb-0 lg:pb-14">
      {/* img */}
      <div
        className="col-span-2 mx-auto hidden lg:block">
        <Image
          className="w-full"
          width={1000}
          height={1000}
          alt=""
          src="https://i.ibb.co/XXtZcP2/Screenshot-2023-08-31-204222-i.png" />
      </div>
      {/* img */}

      {/* text filed */}
      <div
        className="col-span-3">
        <div
          className="text-center lg:text-end">
          <h1
            className="text-4xl lg:text-5xl font-bold">
            Join us & Explore
          </h1>
          <h1
            className="text-4xl lg:text-5xl font-bold mt-3">
            Thousands of Jobs
          </h1>
          <p
            className="mt-6 lg:mt-8 font-semibold text-gray-600 text-sm">
            Find Jobs, Employment & Career Opportunities
          </p>
        </div>

        {/* input filed  */}
        <div
          className="grid grid-cols-12 bg-white shadow-sm py-3 rounded-full px-1 mt-8 lg:mt-12 ml-0 lg:ml-16">
          {/* icon */}
          <div
            className="flex items-center justify-center col-span-2 lg:col-auto">
            <BsSearch className="text-2xl text-gray-500" />
          </div>
          {/* icon */}

          {/* input */}
          <div
            className="col-span-10 lg:col-span-8 flex items-center justify-center">
            <input
              className="w-full px-4 lg:px-6 lg:py-4 rounded-full"
              type="text"
              name="text"
              id=""
              placeholder="job title, keyword or company" />
          </div>
          {/* input */}

          {/* btn */}
          <Link
            href={`/hrjobs`}
            className="col-span-4 lg:col-span-3 lg:flex justify-center items-center mx-2 lg:mx-5 hidden">
            <button
              className="bg-[#40e1f9] hover:bg-[#40e1f9] text-white w-full rounded-full lg:py-4 flex items-center justify-center text-center lg:font-extrabold font-semibold">
              Find Job
            </button>
          </Link>
          {/* btn */}

        </div>
        {/* input filed */}
        {/* btn */}
        <Link
          href={`/hrjobs`}
          className="col-span-4 lg:col-span-3 flex justify-center items-center lg:mx-5 lg:hidden mt-4 w-[55%] mx-auto">
          <button
            className="bg-[#40e1f9] hover:bg-[#40e1f9] text-white w-full rounded-full py-2 lg:py-4 flex items-center justify-center text-center lg:font-extrabold font-semibold">
            Find Job
          </button>
        </Link>

        {/* sub title */}
        <p
          className="cursor-pointer mb-10 text-center lg:text-end text-gray-500 mt-6 text-sm">
          Popular Searches: <span
            className="font-semibold text-gray-600">
            Designer, Developer, Web, IOS, PHP, Senior, Engineer
          </span>
        </p>
        {/* sub title */}

      </div>
      {/* text filed */}

      {/* small content div */}
      <div
        className="col-span-12 mt-12">

        <div
          className="grid lg:grid-cols-3">

          {/* first */}
          <div
            className="group group/item flex items-center justify-between py-5 px-6 rounded-xl shadow-sm hover:cursor-pointer duration-300 lg:mx-4 mx-2 my-2 lg:my-4 bg-white">
            <div
              className="flex">
              {/* icon start */}
              <div
                className="bg-yellow-100 px-3 py-3 rounded-xl group-hover:bg-yellow-300 duration-300">
                <BiMailSend className="text-5xl text-yellow-400 group-hover:text-white duration-300" />
              </div>
              {/* icon end */}
              <div
                className="mx-4">
                <Link
                  href="/hrjobs"
                  className="text-lg font-semibold pt-1 pb-2 hover:text-blue-500 duration-300">
                  Work Inquiry From
                </Link>
                <p
                  className="text-gray-500 text-sm mt-1 font-semibold">
                  Our Top HR & It s A Great Opportunities
                </p>
              </div>
            </div>
          </div>
          {/* first */}

          {/* second */}
          <div
            className="group group/item flex items-center justify-between py-5 px-6 rounded-xl shadow-sm hover:cursor-pointer duration-300 lg:mx-4 mx-2 my-2 lg:my-4 bg-white">
            <div
              className="flex">
              {/* icon start */}
              <div
                className="bg-yellow-100 px-3 py-3 rounded-xl group-hover:bg-yellow-300 duration-300">
                <PiNewspaperDuotone className="text-5xl text-yellow-400 group-hover:text-white duration-300" />
              </div>
              {/* icon end */}
              <div
                className="mx-4">
                <Link
                  href="/hrjobs"
                  className="text-lg font-semibold pt-1 pb-2 hover:text-blue-500 duration-300">
                  Upload Your CV
                </Link>
                <p
                  className="text-gray-500 text-sm mt-1 font-semibold">
                  It Help Tou To Find Jobs
                </p>
              </div>
            </div>
          </div>
          {/* second */}

          {/* third */}
          <div
            className="group group/item flex items-center justify-between py-5 px-6 rounded-xl shadow-sm hover:cursor-pointer duration-300 lg:mx-4 mx-2 my-2 lg:my-4 bg-white">
            <div
              className="flex">
              {/* icon start */}
              <div
                className="bg-yellow-100 px-3 py-3 rounded-xl group-hover:bg-yellow-300 duration-300">
                <FaGraduationCap className="text-5xl text-yellow-400 group-hover:text-white duration-300" />
              </div>
              {/* icon end */}
              <div
                className="mx-4">
                <Link
                  href="/hrjobs"
                  className="text-lg font-semibold pt-1 pb-2 hover:text-blue-500 duration-300">
                  10k+ Candidates
                </Link>
                <p
                  className="text-gray-500 text-sm mt-1 font-semibold">
                  Work With Us To Find Jobs
                </p>
              </div>
            </div>
          </div>
          {/* third */}
        </div>

      </div>
    </div>
  );
};

export default HomeBanner;
