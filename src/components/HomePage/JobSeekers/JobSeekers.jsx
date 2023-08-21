import dataOfJobSeekers from "@/Data/jobSeekers";
import SingleJobSeekers from "./SingleJobSeekers";
import Link from "next/link";

const JobSeekers = () => {
  const topSeekers = dataOfJobSeekers.filter((i) => i.jobExperience >= 4);

  return (
    <div
      className="w-[95%] mx-auto pb-12">
      <div
        className="my-10">
        <h2
          className="text-3xl font-bold text-center mb-4">
          Find Seekers
        </h2>
        <p
          className="text-center font-medium">
          Lorem ipsum dolor sit amen elite, sed do elusion tempore
        </p>
      </div>
      <div
        className="grid md:grid-cols-3">
        {
          topSeekers.map((data) => (
            <SingleJobSeekers
              key={data._id}
              data={data}>
            </SingleJobSeekers>
          ))}
      </div>
      <div
        className="flex justify-center my-8 mb-20">
        <Link
          href="/seekers">
          <button
            className="btn bg-[#40e1f9] px-10 p-3 rounded-lg text-white hover:bg-transparent hover:text-[#40e1f9] hover:font-extrabold hover:border-y-2 hover:border-x-2 hover:border-[#40e1f9] ease-out duration-300 mt-3">
            Load More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobSeekers;
