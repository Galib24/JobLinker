"use client";

import { AuthContext } from "@/provider/AuthProvider";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

const GetSeekerJobApplyFromDB = () => {
  const { user } = useContext(AuthContext);

  //   const {
  //     data: seekerApplies = [],
  //     refetch,
  //     isLoading,
  //   } = useQuery({
  //     queryFn: async () => {
  //       if (user?.email) {
  //         const res = await axios("/api/seekerJobApply");
  //         return res.data;
  //       }
  //     },
  //   });

  const [seekerApplies, setSeekerApplies] = useState([]);

  // get the data
  useEffect(() => {
    const fetchSeekerApplyData = async () => {
      const response = await fetch("/api/seekerJobApply");
      const data = await response.json();
      // console.log(data);
      setSeekerApplies(data);
    };

    fetchSeekerApplyData();
  }, []);

  return [seekerApplies];
};

export default GetSeekerJobApplyFromDB;
