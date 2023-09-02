"use client";

import React, { useEffect, useState } from "react";

const SingleSeekerPage = ({ params }) => {
  const [singleSeekerData, setSingleSeekerData] = useState();
  //   use console log to see what data have singleHrData, then continue design

  const { id } = params;

  // get the data
  useEffect(() => {
    const fetchSingleSeekerData = async () => {
      const response = await fetch(`/api/seeker/${id}`);
      const data = await response.json();
      console.log(data);
      setSingleSeekerData(data);
    };

    fetchSingleSeekerData();
  }, [id]);

  {
    /* please use optional chaining ? when required, otherwise throw error */
  }
  return (
    <div className="mt-40">
      SingleSeekerPage: {singleSeekerData?.findingJobTitle}
    </div>
  );
};

export default SingleSeekerPage;
