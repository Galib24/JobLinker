import Image from "next/image";
import Link from "next/link";
import { BiMailSend } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { PiGraduationCap, PiNewspaperClippingLight } from "react-icons/pi";

const HomeBanner = () => {
  return (

    <div
      className="bg-gradient-to-r from-cyan-50 to-blue-100">
      <div
        className="container mx-auto grid lg:grid-cols-12 pt-0 lg:pt-16 lg:px-14 px-4 pb-0 lg:pb-14">
        {/* img */}
        <div
          className="col-span-7 mx-auto hidden lg:block">
          <Image
            className="w-fit"
            width={1600}
            height={1600}
            alt=""
            src="https://i.ibb.co/9G5CvQQ/Banner-Image.png" />
        </div>
        {/* img */}

        {/* text filed */}
        <div
          className="col-span-12 lg:col-span-5 lg:mt-40 mt-24">
          <div
            className="text-center lg:text-end">
            <h1
              className="text-4xl lg:text-6xl font-bold">
              Join us & Explore
            </h1>
            <h1
              className="text-4xl lg:text-6xl font-bold mt-3">
              Thousands of Jobs
            </h1>
            <p
              className="mt-6 lg:mt-4 font-semibold text-gray-600 text-sm">
              Find Jobs, Employment & Career Opportunities
            </p>
          </div>

          {/* input filed  */}
          <div
            className="grid grid-cols-12 bg-white shadow-sm py-3 rounded-full mt-8 lg:mt-16">
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
                className="w-full px-4 lg:px-6 py-2 lg:py-3 border rounded-lg outline-none focus:border-transparent focus:ring-2 focus:ring-gray-50 mr-4 lg:mr-0"
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
                className="bg-[#40e1f9] hover:bg-[#40e1f9] text-white w-full rounded-full lg:py-3 flex items-center justify-center text-center lg:font-bold font-semibold">
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
            className="cursor-pointer mb-10 text-center lg:text-end text-gray-500 mt-4 text-sm">
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
          className="col-span-12 mt-6 lg:mt-12 pb-20 lg:pb-10">

          <div
            className="grid lg:grid-cols-3">

            {/* first */}
            <div
              className="group group/item flex items-center justify-between py-5 px-6 rounded-xl shadow-sm hover:cursor-pointer duration-300 lg:mx-4 mx-2 my-2 lg:my-4 bg-white">
              <div
                className="flex">
                {/* icon start */}
                <div
                  className="bg-red-100 px-3 py-3 rounded-xl group-hover:bg-red-400 duration-300">
                  <BiMailSend className="text-5xl text-red-400 group-hover:text-white duration-300" />
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
                  className="bg-orange-100 px-3 py-3 rounded-xl group-hover:bg-orange-400 duration-300">
                  <PiNewspaperClippingLight className="text-5xl text-orange-400 group-hover:text-white duration-300" />
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
                  <PiGraduationCap className="text-5xl text-yellow-400 group-hover:text-white duration-300" />
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
    </div>
  );
};

export default HomeBanner;
