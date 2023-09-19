import React, { useEffect, useState } from "react";
// import dataOfFeaturedJobs from "@/Data/featuredJobs";
import SingleFeaturedJobs from "./SingleFeaturedJobs";
import Link from "next/link";

const FeaturedJobs = () => {
  const [dataOfFeaturedJobs, setDataOfFeaturedJobs] = useState([]);
  // console.log(dataOfFeaturedJobs);
  // const dataOfFeaturedJobs = await getHrDataFromDb();
  const topFeaturedJobs = dataOfFeaturedJobs?.filter((i) => i.rating >= 5);
  //    console.log(topFeaturedJobs);

  useEffect(() => {
    const fetchHrData = async () => {
      const response = await fetch("/api/hr");
      const data = await response.json();
      // console.log(data);
      setDataOfFeaturedJobs(data);
    };

    fetchHrData();
  }, []);

  return (
    <div className="mt-20 w-[95%] mx-auto container">
      <div>
        <h2 className="text-3xl font-bold text-center mb-4">Featured Jobs</h2>
        <p className="text-center font-medium mb-8">
          Know your worth and find the job that qualify your life
        </p>
      </div>
      <div className="grid md:grid-cols-2">
        {topFeaturedJobs?.slice(0, 6)?.map((item) => (
          <SingleFeaturedJobs key={item._id} item={item}></SingleFeaturedJobs>
        ))}
      </div>
      {/* button */}
      <div className="flex justify-center my-6 mb-20">
        <Link href="/hrjobs">
          <button className="btn bg-[#40e1f9] px-10 p-3 rounded-lg text-white hover:bg-transparent hover:text-[#40e1f9] hover:font-extrabold hover:border-y-2 hover:border-x-2 hover:border-[#40e1f9] ease-out duration-300 mt-3">
            Load More
          </button>
        </Link>
      </div>
      {/* button */}
    </div>
  );
};

export default FeaturedJobs;
