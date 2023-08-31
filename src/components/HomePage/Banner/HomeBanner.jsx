import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";

const HomeBanner = () => {
  return (
    <div className="mx-auto grid lg:grid-cols-5 pt-40 px-16 bg-indigo-100">
      {/* text filed */}
      <div className="col-span-3">
        <h1 className="text-4xl font-bold ">Join us & Explore <br />
          Thousands of Jobs</h1>
        <p className="mt-5 font-medium">Find Jobs, Employment & Career Opportunities</p>

        {/* input filed  */}
        <div className="grid grid-cols-12 bg-white shadow-xl py-7 rounded-full px-5 mt-10 mb-16">
          {/* icon */}
          <div className="flex items-center justify-center">
            <BsSearch className="text-2xl"></BsSearch>

          </div>
          {/* icon */}

          {/* input */}
          <div className="col-span-8 flex items-center justify-center">
            <input className="w-full px-5 py-5 rounded-full" type="text" name="" id="" placeholder="job title, keyword or company,"/>

          </div>
          {/* input */}

          {/* btn */}
         <Link href={`/hrjobs`} className="col-span-3 flex justify-center items-center mx-4">
            <button className="bg-[#40e1f9] hover:bg-[#40e1f9] text-white w-full rounded-full py-5 flex items-center justify-center text-center">Find Job</button>

          </Link>
          {/* btn */}

        </div>
        {/* input filed */}

        {/* sub title */}
        <p className="cursor-pointer mb-10">Popular Searches : Designer, Developer, Web, IOS, PHP, Senior, Engineer,</p>
        {/* sub title */}


      </div>
      {/* text filed */}

      {/* img */}
      <div className="col-span-2 mx-auto hidden lg:block">
        <Image
        className="w-full"
        width={1000}
        height={1000}
        alt="bal"
        src="https://i.ibb.co/vv55YzY/Screenshot-2023-08-31-135607.png"
        ></Image>

      </div>
      {/* img */}

    </div>
  );
};

export default HomeBanner;
