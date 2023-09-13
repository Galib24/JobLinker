"use client";

import GetSeekerJobApplyFromDB from "@/database/dataFromMongoDB/getSeekerJobApplyFromDB";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";

const HrSpecificApplyJobPage = () => {
  const { user } = useContext(AuthContext);

  const [seekerApplies] = GetSeekerJobApplyFromDB();

  const specificHrJobApp = seekerApplies?.filter(
    (job) => job.HrEmail === user.email
  );
  console.log(specificHrJobApp);
  // make the table with this data specificHrJobApp

  return <div>Seeker Application List: {seekerApplies?.length}</div>;
};

export default HrSpecificApplyJobPage;
