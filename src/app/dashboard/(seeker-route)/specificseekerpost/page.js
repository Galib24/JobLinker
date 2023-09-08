"use client";

import { AuthContext } from "@/provider/AuthProvider";
import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";

const Specificseekerpost = () => {
  const { user } = useContext(AuthContext);

  const {
    data: seekersData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryFn: async () => {
      const res = await axios("/api/seeker");
      return res.data;
    },
  });

  if (isLoading)
    return (
      <h2 className="text-4xl font-semibold text-green-700 text-center mt-10">
        Loading...
      </h2>
    );

    console.log(seekersData);

  const specificSeekerData = seekersData?.filter(
    (job) => job.seekerEmail === user?.email
  );

  console.log(specificSeekerData);

  return <div>specificseekerpost</div>;
};

export default Specificseekerpost;
