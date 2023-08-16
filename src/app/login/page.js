"use client"
import Lottie from "lottie-react";
import loginLottie from '../../../public/login.json'
import { BsFillEyeFill, BsFillEyeSlashFill, BsFillPersonFill } from "react-icons/bs";
import { BiLinkExternal, BiSolidLock } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";
import gitHub from "@/asserts/icons/github.png"
import googleLogo from "@/asserts/icons/google.png"
import Image from "next/image";

const LoginPage = () => {
    const [show, setShow] = useState(false);

    return (
        <div
            className="grid md:grid-cols-2 max-w-7xl mx-auto mt-32 items-center">
            {/* lottie */}
            <div>
                <Lottie
                    animationData={loginLottie}
                    loop={true}
                    className="w-[85%] mx-auto hidden md:block" />
                <Link
                    className="hidden md:block"
                    href='/register'>
                    <div
                        className="flex justify-center items-center mt-10 underline font-semibold hover:text-blue-600">
                        New To JobLinker? Create an Account
                        <span
                            className="ml-1">
                            <BiLinkExternal />
                        </span>
                    </div>
                </Link>
            </div>
            {/* lottie */}
            {/* form */}
            <div
                className="px-4">
                <div>
                    <h2
                        className="text-5xl font-semibold my-10">
                        Login In
                    </h2>
                </div>
                <div
                    className="flex items-center border border-x-0 border-t-0 border-b-2 border-black rounded-none">
                    <BsFillPersonFill className="text-3xl mr-3 text-black" />
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter Email"
                        className="input w-full font-semibold"
                        required />
                </div>
                <div
                    className="mt-10 flex items-center border border-x-0 border-t-0 border-b-2 border-black rounded-none">
                    <BiSolidLock className="text-3xl mr-3 text-black" />
                    <input
                        name="name"
                        type={show ? 'text' : 'password'}
                        placeholder="Enter Password"
                        className="input w-full font-semibold"
                        required />
                </div>
                <p
                    className="relative font-semibold bottom-10 left-56 lg:left-96 w-[25%] p-0"
                    onClick={() => setShow(!show)}>
                    <small
                        className="font-medium flex justify-end cursor-pointer">
                        {
                            show ?
                                <span>
                                    <BsFillEyeSlashFill className="text-black text-3xl" />
                                </span>
                                :
                                <span>
                                    <BsFillEyeFill className="text-black text-3xl" />
                                </span>
                        }
                    </small>
                </p>
                <label
                    className="label mb-4 relative bottom-4">
                    <Link
                        href="#"
                        className="label-text-alt link link-hover font-semibold text-sm">
                        Forgot password?
                    </Link>
                </label>
                <div>
                    <button
                        className="hover:bg-black hover:text-[#F68519] ease-out duration-300 btn bg-[#40e1f9] w-[100%] md:w-[25%] text-white text-center relative bottom-4">
                        Login
                    </button>
                </div>
                {/* social login section start */}
                <div
                    className="w-[100%] max-w-2xl mx-auto mt-7">
                    {/* divider */}
                    <div
                        className="divider mb-4">
                        Or
                    </div>
                    {/* facebook sigIn start */}
                    <div
                        className="hover:bg-black hover:text-[#F68519] ease-out duration-300 border-2 rounded-full flex items-center cursor-pointer">
                        <Image
                            className="w-[7%] m-2"
                            src={googleLogo}
                            alt="" />
                        <p
                            className="mx-auto pr-6 text-lg">
                            Continue with Google
                        </p>
                    </div>
                    <div
                        className="hover:bg-[#40e1f9] hover:text-[white] ease-out duration-300 border-2 rounded-full flex items-center my-4 cursor-pointer">
                        <Image
                            className="w-[7%] m-2"
                            src={gitHub}
                            alt="" />
                        <p
                            className="mx-auto pr-6 text-lg">
                            Continue with Git Hub
                        </p>
                    </div>
                    {/* Google sigIn end */}
                </div>
                <Link
                    href='/register'>
                    <div
                        className="md:hidden flex justify-center items-center mt-10 underline font-semibold hover:text-blue-600">
                        New To JobLinker? Create an Account
                        <span
                            className="ml-1">
                            <BiLinkExternal />
                        </span>
                    </div>
                </Link>
            </div>
            {/* form section end by Shakil */}
        </div>
    );
};

export default LoginPage;