"use client";

import Lottie from "lottie-react";
import registerLottie from "../../../../public/register.json";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiLinkExternal, BiSolidLock } from "react-icons/bi";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "@/provider/AuthProvider";
import { useRouter, useSearchParams } from "next/navigation";
// import createJWT from "@/utilities/createJWT/createJWT";

const RegisterPage = () => {
  const { createUser } = useContext(AuthContext);

  // for redirect user after register
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace } = useRouter();

  // using react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);

    const name = data.name;
    const email = data.email;
    const password = data.password;
    // console.log(name, email, password);

    // sign up functionalities
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // createJWT({ email });
        // console.log(loggedUser);
        if (loggedUser.email) {
          toast.success("Successfully Sign Up");
          replace(from);

          const userData = {
            name,
            email,
            role: "",
          };

          // send users data to db
          userDataPost(userData);
        }
      })
      .catch((err) => console.log(err));

    // function to post data to database
    const userDataPost = async (userData) => {
      try {
        const response = await fetch("/api/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          console.log("User Data added to DB");
        }
      } catch (error) {
        console.log(error.message);
      }
    };
  };

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
          <form
            onSubmit={handleSubmit(onSubmit)}>
            <div
              className="px-4">
              {/* Name field */}
              <div
                className="my-10 flex items-center border border-x-0 border-t-0 border-b-2 border-black rounded-none">
                <BsFillPersonFill className="text-3xl mr-3 text-black" />
                <input
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                  className="py-4 px-2 w-full font-semibold rounded-lg outline-none focus:border-transparent focus:ring-0"
                  {...register("name", { required: true })} />
                {
                  errors.name?.type === "required"
                  &&
                  toast.error("Provide your name")
                }
              </div>

              {/* Email field */}
              <div
                className="my-10 flex items-center border border-x-0 border-t-0 border-b-2 border-black rounded-none">
                <MdEmail className="text-3xl mr-3 text-black" />
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  className="py-4 px-2 w-full font-semibold rounded-lg outline-none focus:border-transparent focus:ring-0"
                  {...register("email", { required: true })}
                />
                {
                  errors.email?.type === "required"
                  &&
                  toast.error("Provide your Email")
                }
              </div>

              {/* Password field */}
              <div
                className="my-10 flex items-center border border-x-0 border-t-0 border-b-2 border-black rounded-none">
                <BiSolidLock className="text-3xl mr-3 text-black" />
                <input
                  name="password"
                  type="password"
                  placeholder="*******"
                  className="py-4 px-2 w-full font-semibold rounded-lg outline-none focus:border-transparent focus:ring-0"
                  {
                  ...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-])/,
                  })
                  } />
                {
                  errors.password?.type === "required"
                  &&
                  toast.error("Provide your Password")
                }
                {
                  errors.password?.type === "minLength"
                  &&
                  toast.error("Password must be 6 characters")
                }
                {
                  errors.password?.type === "pattern"
                  &&
                  toast.error(
                    "Password must have one uppercase, lowercase & symbol"
                  )
                }
              </div>
              {/* checkBox */}
              <div
                className="flex">
                <input
                  type="checkbox"
                  className="checkbox mr-3" />
                <h2>
                  I Agree all statement In{" "}
                  <span className="link hover:text-blue-500 hover:font-bold duration-300 ease-out">
                    Terms of services
                  </span>
                </h2>
              </div>

              <div
                className="my-6"
                type="submit">
                <input
                  className="ease-out duration-300 btn bg-[#40e1f9] w-[100%] md:w-[25%] text-white text-center relative bottom-4 rounded-lg hover:bg-transparent hover:text-[#40e1f9] hover:font-extrabold hover:border-y-2 hover:border-x-2 hover:border-[#40e1f9] my-5"
                  type="submit"
                  value="Register"
                />
              </div>
            </div>
          </form>
        </div>
        {/* signup form end */}
        {/* lottie file start */}
        <div>
          <div>
            <Lottie
              className="w-[85%] mx-auto hidden md:block"
              animationData={registerLottie}
              loop={true}
            />
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
