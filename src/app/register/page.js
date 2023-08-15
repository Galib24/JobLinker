'use client'
import Lottie from "lottie-react";
import registerLottie from "../../../public/register.json";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiLinkExternal, BiSolidLock } from "react-icons/bi";
import { SlLock } from "react-icons/sl";
import Link from "next/link";

const RegisterPage = () => {

    return (
        <>
            <div
                className="max-w-7xl mx-auto mt-32 grid md:grid-cols-2">
                <div>
                    <div>
                        <h2
                            className="text-5xl font-semibold mb-14 px-4">
                            Register
                        </h2>
                    </div>
                    {/* signup form start */}
                    <div
                        className="px-4">
                        <div
                            className="my-10 flex items-center border border-x-0 border-t-0 border-b-2 border-black rounded-none">
                            <BsFillPersonFill className="text-3xl mr-3 text-black" />
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter Name"
                                className="input w-full focus-within:border-none focus:border-none font-semibold"
                                required />
                        </div>
                        <div
                            className="my-10 flex items-center border border-x-0 border-t-0 border-b-2 border-black rounded-none">
                            <MdEmail className="text-3xl mr-3 text-black" />
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter Email"
                                className="input w-full focus-within:border-none focus:border-none font-semibold"
                                required />
                        </div>
                        <div
                            className="my-10 flex items-center border border-x-0 border-t-0 border-b-2 border-black rounded-none">
                            <BiSolidLock className="text-3xl mr-3 text-black" />
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="input w-full focus-within:border-none focus:border-none font-semibold"
                                required />
                        </div>
                        <div
                            className="my-10 flex items-center border border-x-0 border-t-0 border-b-2 border-black rounded-none">
                            <SlLock className="text-3xl mr-3 text-black" />
                            <input
                                name="repeatPassword"
                                type="password"
                                placeholder="Repeat your password"
                                className="input w-full focus-within:border-none focus:border-none font-semibold"
                                required />
                        </div>
                        {/* checkBox */}
                        <div
                            className="flex">
                            <input
                                type="checkbox"
                                className="checkbox mr-3" />
                            <h2>
                                I Agree all statement In <span
                                    className="link hover:text-blue-600">
                                    Terms of services
                                </span>
                            </h2>
                        </div>
                        <div
                            className="my-6"
                            type="submit">
                            <button
                                className="btn btn-info text-white w-[100%] md:w-[25%]">
                                Register
                            </button>
                        </div>
                    </div>
                </div>
                {/* signup form end */}
                {/* lottie file start */}
                <div>
                    <div>
                        <Lottie
                            className="w-[85%] mx-auto hidden md:block"
                            animationData={registerLottie}
                            loop={true} />
                    </div>
                    <Link
                        href="/login">
                        <div
                            className="flex justify-center relative lg:bottom-16 link font-semibold hover:text-blue-600 items-center">
                            I already have an account <BiLinkExternal className="mr-2" />
                        </div>
                    </Link>
                </div>
                {/* lottie file end */}
            </div>
        </>
    );
};

export default RegisterPage;