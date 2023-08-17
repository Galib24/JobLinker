import Image from "next/image";
import { CiClock2, CiLocationOn, CiStar } from "react-icons/ci";
import { IconName, RiMoneyPoundBoxLine } from "react-icons/ri";

const SingleFeaturedJobs = ({ item }) => {
    const { companyLogo, location, jobTitle, jobPostingTime, salaryRange, jobType, rating } = item
    return (
        <div className="px-3 py-3">
            <div className="card card-compact w-full h-full py-10 px-5 shadow-md hover:shadow-lg">

                {/* container */}
                <div className="flex">
                    {/* img div */}
                    <div>
                        <figure className="mt-5 pl-2">
                            <Image width={60}
                                height={60}
                                className="rounded-full"
                                src={companyLogo}
                                alt="Picture of who give the review">
                            </Image>


                        </figure>
                    </div>
                    {/* img div */}

                    {/* text div */}
                    <div className="card-body">
                        <h2 className="card-title my-1 text-xl hover:text-blue-500 duration-300 cursor-pointer">{jobTitle}</h2>

                        <div className="flex gap-5 text-lg">
                            {/* icon 1 */}
                            <div> <CiLocationOn></CiLocationOn> <span className="pl-1">{location}
                            </span>
                            </div>

                            {/* icon 1 */}

                            {/* icon 2 */}
                            <div>
                                <CiClock2></CiClock2> <span className="pl-1">{jobPostingTime}</span>
                            </div>

                            {/* icon 2 */}

                            {/* icon 3 */}
                            <div>
                                <CiStar></CiStar> <span className="pl-1" >{rating}</span>
                            </div>
                            {/* icon 3 */}

                        </div>

                        <div className="text-lg flex items-center gap-2 mt-3">
                            <RiMoneyPoundBoxLine></RiMoneyPoundBoxLine> {salaryRange}

                            <div className="ml-20 text-base">
                            <span className="badge badge-info text-white badge-lg">{jobType}</span>
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