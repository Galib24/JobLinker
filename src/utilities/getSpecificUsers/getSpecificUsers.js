"use client";

import { AuthContext } from "@/provider/AuthProvider";
import axios from "axios";
import { useContext } from "react";
import { useQuery } from "react-query";

const GetSpecificUsers = () => {
  const { user } = useContext(AuthContext);

  const {
    data: dbUsers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryFn: async () => {
      const res = await axios("/api/users");
      return res.data;
    },
  });

  if (isLoading)
    return (
      <h2 className="text-4xl font-semibold text-green-700 text-center mt-10">
        Loading...
      </h2>
    );

  const matchedUserWithArray = dbUsers?.filter(
    (dbUser) => dbUser?.email === user?.email
  );
//   console.log(matchedUser);
  const matchedUser = matchedUserWithArray[0];

  return {matchedUser, refetch};
};

export default GetSpecificUsers;
