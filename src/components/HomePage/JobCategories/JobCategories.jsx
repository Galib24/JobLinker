import Link from "next/link";
import { TbCoins } from "react-icons/tb";
import { BsGear } from "react-icons/bs";
import { HiOutlinePhotograph } from "react-icons/hi";
import { IoMegaphoneOutline } from "react-icons/io5";
import { PiCode, PiNewspaperClippingLight } from "react-icons/pi";
import { MdRocketLaunch } from "react-icons/md";
import { CiMedicalCase } from "react-icons/ci";
import { RiCustomerService2Line } from "react-icons/ri";

const JobCategories = () => {
  return (
    <div
      className="w-[95%] mx-auto container">
      <div
        className="text-center mt-20">
        <h2
          className="text-3xl font-bold mb-3">
          Popular Job Categories
        </h2>
        <p>
          2020 jobs live - 293 added today
        </p>
      </div>

      {/* main card section */}
      <div
        className="grid lg:grid-cols-3 mt-10 mb-20">

        {/* card 1 start */}
        <div
          className="group group/item flex items-center justify-between border border-gray-200 py-5 px-6 rounded-xl shadow-sm hover:cursor-pointer duration-300 lg:mx-4 mx-2  my-2 lg:my-4">
          <div
            className="flex">
            {/* icon start */}
            <div
              className="bg-indigo-100 px-3 py-3 rounded-xl group-hover:bg-blue-500 duration-300">
              <TbCoins className="text-5xl text-blue-500 group-hover:text-white duration-300" />
            </div>
            {/* icon end */}
            <div

              className="mx-4">
              <Link
                href="/hrjobs"
                className="text-lg font-semibold pt-1 pb-2 hover:text-blue-500 duration-300">
                Accounting / Finance
              </Link>
              <p
                className="font-medium text-gray-500 text-sm">
                (2 open positions)
              </p>
            </div>
          </div>
        </div>
        {/* card 1 end */}

        {/* card 2 start */}
        <div
          className="group group/item flex items-center justify-between border border-gray-200 py-5 px-6 rounded-xl shadow-sm hover:cursor-pointer duration-300 lg:mx-4 mx-2  my-2 lg:my-4">
          <div
            className="flex">
            {/* icon start */}
            <div
              className="bg-indigo-100 px-3 py-3 rounded-xl group-hover:bg-blue-500 duration-300">
              <IoMegaphoneOutline className="text-5xl text-blue-500 group-hover:text-white duration-300" />
            </div>
            {/* icon end */}
            <div
              className="mx-4">
              <Link
                href="/hrjobs"
                className="text-lg font-semibold pt-1 pb-2 hover:text-blue-500 duration-300">
                Marketing
              </Link>
              <p
                className="font-medium text-gray-500 text-sm">
                (86 open positions)
              </p>
            </div>
          </div>
        </div>
        {/* card 2 end */}

        {/* card 3 start */}
        <div
          className="group group/item flex items-center justify-between border border-gray-200 py-5 px-6 rounded-xl shadow-sm hover:cursor-pointer duration-300 lg:mx-4 mx-2  my-2 lg:my-4">
          <div
            className="flex">
            {/* icon start */}
            <div
              className="bg-indigo-100 px-3 py-3 rounded-xl group-hover:bg-blue-500 duration-300">
              <HiOutlinePhotograph className="text-5xl text-blue-500 group-hover:text-white duration-300" />
            </div>
            {/* icon end */}
            <div
              className="mx-4">
              <Link
                href="/hrjobs"
                className="text-lg font-semibold pt-1 pb-2 hover:text-blue-500 duration-300">
                Design
              </Link>
              <p
                className="font-medium text-gray-500 text-sm">
                (43 open positions)
              </p>
            </div>
          </div>
        </div>
        {/* card 3 end */}

        {/* card 4 start */}
        <div
          className="group group/item flex items-center justify-between border border-gray-200 py-5 px-6 rounded-xl shadow-sm hover:cursor-pointer duration-300 lg:mx-4 mx-2  my-2 lg:my-4">
          <div
            className="flex">
            {/* icon start */}
            <div
              className="bg-indigo-100 px-3 py-3 rounded-xl group-hover:bg-blue-500 duration-300">
              <PiCode className="text-5xl text-blue-500 group-hover:text-white duration-300" />
            </div>
            {/* icon end */}
            <div
              className="mx-4">
              <Link
                href="/hrjobs"
                className="text-lg font-semibold pt-1 pb-2 hover:text-blue-500 duration-300">
                Development
              </Link>
              <p
                className="font-medium text-gray-500 text-sm">
                (12 open positions)
              </p>
            </div>
          </div>
        </div>
        {/* card 4 end */}

        {/* card 5 start */}
        <div
          className="group group/item flex items-center justify-between border border-gray-200 py-5 px-6 rounded-xl shadow-sm hover:cursor-pointer duration-300 lg:mx-4 mx-2  my-2 lg:my-4">
          <div
            className="flex">
            {/* icon start */}
            <div
              className="bg-indigo-100 px-3 py-3 rounded-xl group-hover:bg-blue-500 duration-300">
              <PiNewspaperClippingLight className="text-5xl text-blue-500 group-hover:text-white duration-300" />
            </div>
            {/* icon end */}
            <div
              className="mx-4">
              <Link
                href="/hrjobs"
                className="text-lg font-semibold pt-1 pb-2 hover:text-blue-500 duration-300">
                Human Resource
              </Link>
              <p
                className="font-medium text-gray-500 text-sm">
                (55 open positions)
              </p>
            </div>
          </div>
        </div>
        {/* card 5 end */}

        {/* card 6 start */}
        <div
          className="group group/item flex items-center justify-between border border-gray-200 py-5 px-6 rounded-xl shadow-sm hover:cursor-pointer duration-300 lg:mx-4 mx-2  my-2 lg:my-4">
          <div
            className="flex">
            {/* icon start */}
            <div
              className="bg-indigo-100 px-3 py-3 rounded-xl group-hover:bg-blue-500 duration-300">
              <MdRocketLaunch className="text-5xl text-blue-500 group-hover:text-white duration-300" />
            </div>
            {/* icon end */}
            <div
              className="mx-4">
              <Link
                href="/hrjobs"
                className="text-lg font-semibold pt-1 pb-2 hover:text-blue-500 duration-300">
                Automotive Jobs
              </Link>
              <p
                className="font-medium text-gray-500 text-sm">
                (2 open positions)
              </p>
            </div>
          </div>
        </div>
        {/* card 6 end */}

        {/* card 7 start */}
        <div
          className="group group/item flex items-center justify-between border border-gray-200 py-5 px-6 rounded-xl shadow-sm hover:cursor-pointer duration-300 lg:mx-4 mx-2  my-2 lg:my-4">
          <div
            className="flex">
            {/* icon start */}
            <div
              className="bg-indigo-100 px-3 py-3 rounded-xl group-hover:bg-blue-500 duration-300">
              <RiCustomerService2Line className="text-5xl text-blue-500 group-hover:text-white duration-300" />
            </div>
            {/* icon end */}
            <div
              className="mx-4">
              <Link
                href="/hrjobs"
                className="text-lg font-semibold pt-1 pb-2 hover:text-blue-500 duration-300">
                Customer Service
              </Link>
              <p
                className="font-medium text-gray-500 text-sm">
                (2 open positions)
              </p>
            </div>
          </div>
        </div>
        {/* card 7 end */}

        {/* card 8 start */}
        <div
          className="group group/item flex items-center justify-between border border-gray-200 py-5 px-6 rounded-xl shadow-sm hover:cursor-pointer duration-300 lg:mx-4 mx-2  my-2 lg:my-4">
          <div
            className="flex">
            {/* icon start */}
            <div
              className="bg-indigo-100 px-3 py-3 rounded-xl group-hover:bg-blue-500 duration-300">
              <CiMedicalCase className="text-5xl text-blue-500 group-hover:text-white duration-300" />
            </div>
            {/* icon end */}
            <div
              className="mx-4">
              <Link
                href="/hrjobs"
                className="text-lg font-semibold pt-1 pb-2 hover:text-blue-500 duration-300">
                Health and Care
              </Link>
              <p
                className="font-medium text-gray-500 text-sm">
                (25 open positions)
              </p>
            </div>
          </div>
        </div>
        {/* card 8 end */}

        {/* card 9 start */}
        <div
          className="group group/item flex items-center justify-between border border-gray-200 py-5 px-6 rounded-xl shadow-sm hover:cursor-pointer duration-300 lg:mx-4 mx-2  my-2 lg:my-4">
          <div
            className="flex">
            {/* icon start */}
            <div
              className="bg-indigo-100 px-3 py-3 rounded-xl group-hover:bg-blue-500 duration-300">
              <BsGear className="text-5xl text-blue-500 group-hover:text-white duration-300" />
            </div>
            {/* icon end */}
            <div
              className="mx-4">
              <Link
                href="/hrjobs"
                className="text-lg font-semibold pt-1 pb-2 hover:text-blue-500 duration-300">
                Project Management
              </Link>
              <p
                className="font-medium text-gray-500 text-sm">
                (92 open positions)
              </p>
            </div>
          </div>
        </div>
        {/* card 9 end */}

      </div>
    </div >
  );
};

export default JobCategories;
