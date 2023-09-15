"use client";

import Image from "next/image";
import Link from "next/link";
import loginLottie from "../../../public/DashboardWelcome.json";
import Lottie from "lottie-react";
import { useContext } from "react";
import { AuthContext } from "@/provider/AuthProvider";

const DashboardPage = () => {

  const { user } = useContext(AuthContext);

  return <div>
    <Link
      href="/"
      className="flex items-center justify-center">
      <Image
        width={190}
        height={190}
        className="cursor-pointer rounded-md"
        src="https://i.ibb.co/ZMxRfGL/job-Linker-Logo.png"
        alt="" />
    </Link>
    <div>
      <Lottie
        animationData={loginLottie}
        loop={true}
        className="mx-auto mt-12" />
      <br />
      <div>
        <h2
          className="text-center font-semibold text-2xl text-gray-600">
          {user?.displayName || "Anonymous"} This Is Your Dashboard
        </h2>
      </div>
    </div>
  </div>;
};

export default DashboardPage;
