import Image from "next/image";
import { CiClock2, CiLocationOn, CiStar } from "react-icons/ci";
import { PiCurrencyCircleDollarDuotone } from "react-icons/pi";

const SingleFeaturedJobs = ({ item }) => {
    const { companyLogo, location, jobTitle, jobPostingTime, salaryRange, jobType, rating,jobPlace,jobNeed } = item
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
                    <div>
                        <h2
                            className="text-base font-semibold hover:text-blue-500 duration-300 cursor-pointer">
                            {jobTitle} <span
                                className="text-sm font-semibold text-green-600 pt-1 mx-1">
                               {jobPlace}
                            </span>
                        </h2>
                        <div
                            className="grid lg:grid-cols-3 text-sm text-[#5c646a] my-2 font-medium">
                            <div
                                className="mr-4 w-fit my-2 lg:my-0">
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
                            <div>
                                <CiStar
                                    className="text-lg" /><span
                                        className="pl-1" >
                                    {rating}
                                </span>
                            </div>
                            {/* icon 3 */}
                        </div>
                        <div
                            className="grid lg:grid-cols-2 text-sm items-center mt-1 py-2 font-semibold justify-between">
                            <div
                                className="flex items-center text-[#5c646a] mb-4 lg:mb-0">
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