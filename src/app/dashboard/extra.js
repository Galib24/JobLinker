import { BiHomeSmile } from "react-icons/bi";
import { AiOutlineMacCommand } from "react-icons/ai";
import {
  BsFillCalendarDateFill,
  BsFillChatQuoteFill,
  BsInfoCircleFill,
} from "react-icons/bs";
import { FaBlog, FaPeopleGroup } from "react-icons/fa6";
import { PiStudentDuotone } from "react-icons/pi";
import { GoFilter } from "react-icons/go";

const Dashboard = () => {
  return (
    <div>
      <div className="pt-24 bg-indigo-50 lg:mb-8 mb-4">
        <h2 className="text-2xl font-semibold text-center">Dashboard</h2>
        <p className="text-center pb-8 font-semibold mt-1 text-gray-500">
          Welcome to Dashboard!
        </p>
      </div>
      {/* for small device start */}
      <div className="drawer lg:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className="flex items-center justify-center mb-4">
            <label
              htmlFor="my-drawer"
              className="btn drawer-button bg-blue-100 text-blue-500 font-bold"
            >
              <GoFilter className="text-xl" /> Filter
            </label>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu w-80 h-fit bg-indigo-50 text-base-content py-20 mt-4">
            {/* Sidebar content here */}
            <div>
              <div>
                {/* main grid section */}
                <div className="mt-8">
                  <h2 className="font-semibold text-center text-xl">
                    Dashboard Menu
                  </h2>
                  <div className="grid grid-rows-4 text-sm font-semibold ms-5 my-3 text-gray-500">
                    <div className="my-2 flex items-center">
                      <BiHomeSmile className="text-xl mr-2" /> Dashboard Menu
                      One
                    </div>
                    <div className="my-2 flex items-center">
                      <AiOutlineMacCommand className="text-xl mr-2" /> Dashboard
                      Menu Two
                    </div>
                    <div className="my-2 flex items-center">
                      <BsFillCalendarDateFill className="text-xl mr-2" />{" "}
                      Dashboard Menu Three
                    </div>
                    <div className="my-2 flex items-center">
                      <BsFillChatQuoteFill className="text-xl mr-2" /> Dashboard
                      Menu Four
                    </div>
                  </div>
                  <hr className="border border-gray-300 rounded-full mx-6 my-3 mb-6" />
                  <div className="mt-3 mx-4 grid grid-rows-4 text-sm font-semibold ms-5 my-3 text-gray-500">
                    <div className="my-2 flex items-center">
                      <BiHomeSmile className="text-xl mr-2" />
                      HOME
                    </div>
                    <div className="my-2 flex items-center">
                      <FaPeopleGroup className="text-xl mr-2" />
                      EMPLOYERS
                    </div>
                    <div className="my-2 flex items-center">
                      <PiStudentDuotone className="text-xl mr-2" />
                      CANDIDATES
                    </div>
                    <div className="my-2 flex items-center">
                      <FaBlog className="text-xl mr-3" />
                      BLOGS
                    </div>
                    <div className="my-2 flex items-center">
                      <BsInfoCircleFill className="text-xl mr-3" />
                      ABOUT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
      {/* for small device end */}
      <div className="grid grid-cols-3 mb-10">
        <div className="bg-indigo-50 rounded-md mx-4 pb-5 hidden lg:block">
          <div className="mt-8">
            <h2 className="font-semibold text-center text-xl">
              Dashboard Menu
            </h2>
            <div className="grid grid-rows-4 text-sm font-semibold ms-5 my-3 text-gray-500">
              <div className="my-2 flex items-center">
                <BiHomeSmile className="text-xl mr-2" /> Dashboard Menu One
              </div>
              <div className="my-2 flex items-center">
                <AiOutlineMacCommand className="text-xl mr-2" /> Dashboard Menu
                Two
              </div>
              <div className="my-2 flex items-center">
                <BsFillCalendarDateFill className="text-xl mr-2" /> Dashboard
                Menu Three
              </div>
              <div className="my-2 flex items-center">
                <BsFillChatQuoteFill className="text-xl mr-2" /> Dashboard Menu
                Four
              </div>
            </div>
            <hr className="border border-gray-300 rounded-full mx-6 my-3 mb-6" />
            <div className="mt-3 mx-4 grid grid-rows-4 text-sm font-semibold ms-5 my-3 text-gray-500">
              <div className="my-2 flex items-center">
                <BiHomeSmile className="text-xl mr-2" />
                HOME
              </div>
              <div className="my-2 flex items-center">
                <FaPeopleGroup className="text-xl mr-2" />
                EMPLOYERS
              </div>
              <div className="my-2 flex items-center">
                <PiStudentDuotone className="text-xl mr-2" />
                CANDIDATES
              </div>
              <div className="my-2 flex items-center">
                <FaBlog className="text-xl mr-3" />
                BLOGS
              </div>
              <div className="my-2 flex items-center">
                <BsInfoCircleFill className="text-xl mr-3" />
                ABOUT
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 col-span-4 bg-blue-400 mx-2 rounded-md text-white">
          Dashboard Content
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
