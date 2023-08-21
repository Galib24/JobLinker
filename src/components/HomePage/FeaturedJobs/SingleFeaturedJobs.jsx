import Image from "next/image";
import { CiClock2, CiLocationOn, CiStar } from "react-icons/ci";
import { PiCurrencyCircleDollarDuotone } from "react-icons/pi";

const SingleFeaturedJobs = ({ item }) => {
    const { companyLogo, location, jobTitle, jobPostingTime, salaryRange, jobType, rating, jobNeed } = item;
    return (
        <div
            className="px-3 py-3">
            <div
                className="w-full h-full rounded-lg border border-gray-200">
                {/* container */}
                <div
                    className="lg:flex block mt-5 mb-3 mx-2">
                    {/* img div */}
                    <div>
                        <Image
                            width={55}
                            height={55}
                            className="rounded-lg mx-5 flex items-center justify-center"
                            src={companyLogo}
                            alt="">
                        </Image>
                    </div>
                    {/* img div */}
                    {/* text div */}
                    <div
                        className="w-full">
                        <h2
                            className="text-base font-semibold hover:text-blue-500 duration-300 cursor-pointer mt-4 lg:mt-0">
                            {jobTitle} <span
                                className="text-xs font-semibold text-green-500 pt-1 mx-1">
                                Feature
                            </span>
                        </h2>
                        <div
                            className="grid lg:grid-cols-5 text-sm text-[#5c646a] my-2 font-medium">
                            <div
                                className="col-span-2  mr-4 w-fit my-2 lg:my-0  items-center justify-center">
                                <CiLocationOn
                                    className="text-lg" /><span
                                        className="pl-1">{location}
                                </span>
                            </div>
                            <div
                                className="my-2 lg:my-0">
                                <CiClock2
                                    className="text-lg" /><span
                                        className="pl-1">
                                    {jobPostingTime}
                                </span>
                            </div>
                            <div
                                className="flex items-center justify-center">
                                <CiStar
                                    className="text-lg text-yellow-400" /><span
                                        className="pl-1" >
                                    {rating}
                                </span>
                            </div>
                            {/* icon 3 */}
                        </div>
                        <div
                            className="grid lg:grid-cols-5 text-sm items-center mt-1 py-2 font-semibold justify-between">
                            <div
                                className="flex items-center text-[#5c646a] mb-4 lg:mb-0 col-span-2">
                                <PiCurrencyCircleDollarDuotone className="text-xl mr-1" />
                                {salaryRange}
                            </div>
                            <div
                                className="text-xs">
                                <span
                                    className="bg-[#40e1f9] rounded-full py-1 px-4 text-white">
                                    {jobType}
                                </span>
                            </div>
                            <div
                                className="rotate-45 relative lg:bottom-14 bottom-52 right-1 lg:left-40 bg-yellow-400 lg:w-[60%] text-center rounded-full text-white px-2">
                                {jobNeed}
                            </div>
                        </div>
                    </div>
                    {/* text div */}
                </div>
                {/* container */}
            </div>
        </div>
    );
};

export default SingleFeaturedJobs;