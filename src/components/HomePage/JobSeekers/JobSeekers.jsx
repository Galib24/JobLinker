import dataOfJobSeekers from "@/Data/jobSeekers";
import SingleJobSeekers from "./SingleJobSeekers";

const JobSeekers = () => {
  const topSeekers = dataOfJobSeekers.filter(i => i.jobExperience >= 4);

  return (
    <div
      className="w-[95%] mx-auto pb-12">
      <div
      className="my-10">
        <h2
          className="text-3xl font-bold text-center">
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
          topSeekers.map(data => <SingleJobSeekers
            key={data._id}
            data={data}
          ></SingleJobSeekers>)
        }
      </div>
    </div>
  );
};

export default JobSeekers;
