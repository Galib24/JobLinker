"use client";

import { useEffect, useState } from "react";

const Seekerpostmanage = () => {
  const [dataOfJobSeekers, setDataOfJobSeekers] = useState([]);

  // get the data from db
  useEffect(() => {
    const fetchSeekerData = async () => {
      const response = await fetch("/api/seeker");
      const data = await response.json();
      console.log(data);
      setDataOfJobSeekers(data);
    };

    fetchSeekerData();
  }, []);

  return <div>Seekerpostmanage: {dataOfJobSeekers.length}</div>;
};

export default Seekerpostmanage;
