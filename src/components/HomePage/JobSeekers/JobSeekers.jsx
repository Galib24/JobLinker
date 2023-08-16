import dataOfJobSeekers from "@/Data/jobSeekers";

const JobSeekers = () => {
  console.log(dataOfJobSeekers);
  return (
    <div>
      <h2>Seeker Posted: {dataOfJobSeekers.length}</h2>
    </div>
  );
};

export default JobSeekers;
