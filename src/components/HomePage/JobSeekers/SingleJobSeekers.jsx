import Image from "next/image";
import { PiShootingStarFill } from "react-icons/pi";
import { GiTrophy } from "react-icons/gi";

const SingleJobSeekers = ({ data }) => {
    const { seekerName, image, jobExperience, education, skills, findingJobTitle, seekerJobTime } = data;
    // console.log(data);

    return (
        <div
            className="card border  border-gray-200 bg-base-100 shadow-sm mx-3 my-2">
            <div
                className="mt-5 mx-3 flex justify-end">
                <h2
                    className="justify-center px-6 py-1 font-light bg-yellow-400 rounded-full text-white text-xs w-[35%] lg:w-[28%] text-center">
                    {seekerJobTime}
                </h2>
            </div>
            <figure>
                <Image
                    width={160}
                    height={160}
                    src={image}
                    className="rounded-full"
                    alt="Seekers Image"
                />
            </figure>
            <div
                className="mb-2">
                <h2
                    className="text-center font-bold my-1 text-xl">
                    {seekerName}
                </h2>
                <p
                    className="text-center font-medium text-sm">
                    {findingJobTitle}
                </p>
                <p
                    className="text-center font-medium text-sm py-1">
                    Technical: {education}
                </p>
            </div>
            <div
                className="mb-2">
                <h2
                    className="text-center font-bold">
                    Experience: {jobExperience} <span
                        className="text-xs">Year</span><PiShootingStarFill className="text-xl text-yellow-400 ms-1" />
                </h2>
            </div>
            {/* skill show section */}
            <div
                className="flex justify-between text-xs text-center font-semibold mt-3 mb-4 text-white">
                <p
                    className="bg-red-300 rounded-full mx-1 py-1 items-center justify-center flex w-full">
                    {skills?.skillOne}
                </p>
                <p
                    className="bg-red-300 rounded-full mx-1 py-1 items-center justify-center flex w-full">
                    {skills?.skillTwo}
                </p>
                <p
                    className="bg-red-300 rounded-full mx-1 py-1 items-center justify-center flex w-full">
                    {skills?.skillThree}
                </p>
            </div>
        </div>
    );
};

export default SingleJobSeekers;