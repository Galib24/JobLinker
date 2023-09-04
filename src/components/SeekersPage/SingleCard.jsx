import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleCard = ({ jobPost }) => {
  const { _id, seekerName, image, jobExperience, education, skills, findingJobTitle, seekerJobTime } = jobPost;

  return (
    <Link
      href={`/seekers/${_id}`}
      className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 mt-12 cursor-pointer" >
      <div>
        <div
          className="flex items-center mb-4">
          <div
            className="w-14 h-14">
            <Image
              width={160}
              height={160}
              src={image}
              className="rounded-full mr-4"
              alt="Seekers Image" />
          </div>
          <div
            className="ml-4">
            <h2
              className="text-xl font-semibold">
              {seekerName}{" "}
              <span
                className="justify-center px-3 py-1 ml-2 font-light bg-yellow-400 rounded-full text-white text-xs w-[35%] lg:w-[28%] text-center">
                {seekerJobTime}
              </span>
            </h2>
            <p
              className="text-gray-600 text-[18px] mt-2">
              {findingJobTitle}-{" "}
              <span className="text-[16px]">
                <span className="font-semibold">{jobExperience}</span>{" "}
                {
                  jobExperience
                    ===
                    1 ? "year" : "years"
                } of experience
              </span>
            </p>
          </div>
        </div>
      </div>

      <div
        className="mb-4 flex">
        <div
          className="flex-1">
          <h3
            className="text-xl font-semibold mb-2">
            Skills
          </h3>
          <div
            className="text-gray-700 flex flex-col">
            <span>
              {skills.skillOne}
            </span>
            <span>
              {skills.skillTwo}
            </span>
            <span>
              {skills.skillThree}
            </span>
          </div>
        </div>
        <div
          className="flex-1">
          <h3
            className="text-xl font-semibold mb-2">
            Education
          </h3>
          <p
            className="text-gray-700">
            {education}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SingleCard;
