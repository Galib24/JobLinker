import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleCard = ({ jobPost }) => {
  const { _id, seekerName, image, jobExperience, education, skills, findingJobTitle, seekerJobTime } = jobPost;

  return (
    <div
      className="bg-gray-50 px-6 py-4 my-4 mx-2 rounded-lg">
      <Link
        href={`/seekers/${_id}`}>
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
              className="ml-4 w-full">
              <h2
                className="text-xl font-semibold text-gray-700 hover:text-blue-500">
                {seekerName}{" "}
                <span
                  className="justify-center px-6 py-1 ml-10 font-light bg-yellow-400 rounded-full text-white text-xs w-[35%] lg:w-[28%] text-center">
                  {seekerJobTime}
                </span>
              </h2>
              <p
                className="text-gray-600 text-xs mt-2 font-medium">
                {findingJobTitle} -{" "}
                <span>
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
          className="grid grid-cols-7 mt-6">

          <div
            className="col-span-6 grid grid-cols-12 mb-5">
            <h3
              className="text-lg font-semibold text-gray-600">
              Skills:
            </h3>
            <div
              className="flex col-span-11 text-xs font-semibold">
              <span
                className="flex items-center bg-blue-100 w-fit text-blue-600 rounded-full px-5 mr-3">
                {skills.skillOne}
              </span>
              <span
                className="flex items-center bg-blue-100 w-fit text-blue-600 rounded-full px-5 mr-3">
                {skills.skillTwo}
              </span>
              <span
                className="flex items-center bg-blue-100 w-fit text-blue-600 rounded-full px-5">
                {skills.skillThree}
              </span>
            </div>
          </div>

          <div
            className="flex col-span-3">
            <h3
              className="text-lg font-semibold text-gray-600 mr-4">
              Education:
            </h3>
            <p
              className="flex items-center justify-center text-xs font-medium bg-gray-200 text-gray-700 rounded-full px-5">
              {education}
            </p>
          </div>

        </div>
      </Link>
    </div>
  );
};

export default SingleCard;
