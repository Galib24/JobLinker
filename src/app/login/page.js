"use client";

import Lottie from "lottie-react";
import loginLottie from "../../../public/login.json";
import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { BiLinkExternal, BiSolidLock } from "react-icons/bi";
import { useContext, useRef, useState } from "react";
import Link from "next/link";
import gitHub from "@/asserts/icons/github.png";
import googleLogo from "@/asserts/icons/google.png";
import Image from "next/image";
import { AuthContext } from "@/provider/AuthProvider";
import { toast } from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

const LoginPage = () => {
  const [show, setShow] = useState(false);

  // import ref for password reset
  const emailRef = useRef();

  const { signInUser, googleSignIn, resetPassword } = useContext(AuthContext);

  // for redirect user after login
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace } = useRouter();

  //  handle Login functionality
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // sign in user
    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        if (loggedUser?.email) {
          toast.success("Login successfully");
          replace(from);
        }
      })
      .catch((error) => {
        console.log(error?.message);
        toast.error(error?.message, {
          position: "top-center",
        });
      });
  };

  // google login functionality
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        // TODO: navigate here
        toast.success("Login successfully");
        replace(from);
      })
      .catch((err) => toast.error(err.message));
  };

  // Reset Password functionality
  const handleResetPassword = () => {
    const email = emailRef.current?.value;
    console.log(email);
    if (!email) {
      toast.error("Provide your email.", {
        position: "top-center",
      });
      return;
    }

    // pass reset
    resetPassword(email)
      .then(() => {
        toast.success("Check your email, please!");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="grid md:grid-cols-2 max-w-7xl mx-auto mt-32 items-center mb-6">
      {/* lottie */}
      <div>
        <Lottie
          animationData={loginLottie}
          loop={true}
          className="w-[85%] mx-auto hidden md:block"
        />
        <Link className="hidden md:block" href="/register">
          <div className="flex justify-center items-center mt-10 underline font-semibold hover:text-blue-600">
            New To JobLinker? Create an Account
            <span className="ml-1">
              <BiLinkExternal />
            </span>
          </div>
        </Link>
      </div>
      {/* lottie */}

      {/* form */}
      <div className="px-4">
        <div>
          <h2 className="text-5xl font-semibold my-10">Login In</h2>
        </div>

        <form onSubmit={handleLogin}>
          <div className="flex items-center border border-x-0 border-t-0 border-b-2 border-black rounded-none">
            <BsFillPersonFill className="text-3xl mr-3 text-black" />
            <input
              name="email"
              type="text"
              placeholder="Enter Email"
              ref={emailRef}
              className="input w-full font-semibold"
              required
            />
          </div>

          <div className="mt-10 flex items-center border border-x-0 border-t-0 border-b-2 border-black rounded-none">
            <BiSolidLock className="text-3xl mr-3 text-black" />
            <input
              name="password"
              type={show ? "text" : "password"}
              placeholder="Enter Password"
              className="input w-full font-semibold"
              required
            />
          </div>

          <p
            className="relative font-semibold bottom-10 left-56 lg:left-96 w-[25%] p-0"
            onClick={() => setShow(!show)}
          >
            <small className="font-medium flex justify-end cursor-pointer">
              {show ? (
                <span>
                  <BsFillEyeSlashFill className="text-black text-3xl" />
                </span>
              ) : (
                <span>
                  <BsFillEyeFill className="text-black text-3xl" />
                </span>
              )}
            </small>
          </p>
          <label className="label mb-4 relative bottom-4">
            <button
              onClick={handleResetPassword}
              className="label-text-alt link link-hover font-semibold text-sm"
            >
              Forgot password?
            </button>
          </label>
          <div>
            {/* <button className="hover:bg-black hover:text-[#F68519] ease-out duration-300 btn bg-[#40e1f9] w-[100%] md:w-[25%] text-white text-center relative bottom-4">
              Login
            </button> */}

            <input
              className="hover:bg-black hover:text-[#F68519] ease-out duration-300 btn bg-[#40e1f9] w-[100%] md:w-[25%] text-white text-center relative bottom-4"
              type="submit"
              value="Login"
            />
          </div>
        </form>

        {/* social login section start */}
        <div className="w-[100%] max-w-2xl mx-auto mt-7">
          {/* divider */}
          <div className="divider mb-4">Or</div>
          {/* google sigIn */}
          <div
            onClick={handleGoogleLogin}
            className="hover:shadow-md border-2 rounded-full flex items-center cursor-pointer"
          >
            <Image className="w-[7%] m-2" src={googleLogo} alt="" />
            <p className="mx-auto pr-6 text-lg">Continue with Google</p>
          </div>

          {/* github signIn */}
          <div className=" hover:shadow-md border-2 rounded-full flex items-center my-4 cursor-pointer">
            <Image className="w-[7%] m-2" src={gitHub} alt="" />
            <p className="mx-auto pr-6 text-lg">Continue with Git Hub</p>
          </div>
        </div>
        {/* social sigIn end */}

        <Link href="/register">
          <div className="md:hidden flex justify-center items-center mt-10 underline font-semibold hover:text-blue-600">
            New To JobLinker? Create an Account
            <span className="ml-1">
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
