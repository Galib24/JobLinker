"use client";

import GetSeekerJobApplyFromDB from "@/database/dataFromMongoDB/getSeekerJobApplyFromDB";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";

const MyjobappliedPage = () => {
  const { user } = useContext(AuthContext);

  const [seekerApplies] = GetSeekerJobApplyFromDB();
  const myJobApplies = seekerApplies?.filter(
    (job) => job.seekerEmail === user.email
  );
  console.log(myJobApplies);

  return <div>MyjobApplied Page: {myJobApplies.length}</div>;
};

export default MyjobappliedPage;
