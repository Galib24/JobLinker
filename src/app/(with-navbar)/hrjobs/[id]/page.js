"use client";

import { useEffect, useState } from "react";

const SingleHRPage = ({ params }) => {
  const [singleHrData, setSingleHrData] = useState();
  //   use console log to see what data have singleHrData, then continue design

  
  const { id } = params;

  // get the data
  useEffect(() => {
    const fetchSingleHrData = async () => {
      const response = await fetch(`/api/hr/${id}`);
      const data = await response.json();
      console.log(data);
      setSingleHrData(data);
    };

    fetchSingleHrData();
  }, [id]);

  {
    /* please use optional chaining ? when required, otherwise throw error */
  }

  return <div className="mt-40">SingleHRPage: {singleHrData?.jobTitle}</div>;
};

export default SingleHRPage;
