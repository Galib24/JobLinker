import Image from "next/image";
import { PiShootingStarFill } from "react-icons/pi";
import { GiTrophy } from "react-icons/gi";

const SingleJobSeekers = ({ data }) => {
  const {
    seekerName,
    image,
    jobExperience,
    education,
    skills,
    findingJobTitle,
    seekerJobTime,
  } = data;
  // console.log(data);

  return (
    <div className="card border  border-gray-200 bg-base-100 shadow-sm mx-3 my-2">
      <div className="mt-5 mx-3 flex justify-end">
        <h2 className="justify-center px-6 py-1 font-light bg-yellow-400 rounded-full text-white text-xs w-[35%] lg:w-[28%] text-center">
          {seekerJobTime}
        </h2>
      </div>
      <figure>
        <Image
          width={160}
          height={160}
          src={image}
          className="rounded-full my-3"
          alt="Seekers Image"
        />
      </figure>
      <div>
        <h2 className="text-center font-bold my-1 text-xl">{seekerName}</h2>
        <p className="text-center font-medium text-sm">{findingJobTitle}</p>
        <p className="text-center font-medium text-sm py-1">
          Technical: {education}
        </p>
      </div>
      <div className="mb-2">
        <h2 className="text-center font-bold">
          Experience: {jobExperience} <span className="text-xs">Year</span>
          <PiShootingStarFill className="text-xl text-yellow-400 ms-1" />
        </h2>
      </div>
      {/* skill show section */}
      <div className="text-xs text-center font-bold mt-3 mb-8 px-4">
        <div className="flex items-center justify-center mb-3">
          <p className="bg-zinc-200 rounded-full mx-1 items-center justify-center flex w-fit px-7 py-3">
            {skills?.skillOne}
            <GiTrophy className="text-yellow-500 text-base ms-1" />
          </p>
          <p className="bg-zinc-200 rounded-full mx-1 py-3 items-center justify-center flex w-fit px-7">
            {skills?.skillTwo}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <p className="bg-zinc-200 rounded-full  mx-1 py-3 items-center justify-center flex w-fit px-7">
            {skills?.skillThree}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleJobSeekers;
