"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "@/provider/AuthProvider";
import { FiLogIn } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import defaultImg from "@/asserts/profile.png";
// import matchedUser from "@/utilities/getSpecificUsers/getSpecificUsers";
import GetSpecificUsers from "@/utilities/getSpecificUsers/getSpecificUsers";

const styles = {
  navLinks:
    "ml-3 uppercase border-0 mr-10 border-white hover:border-[#F68519] text-xl ",
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // user come from AuthContext
  const { user, signOutUser } = useContext(AuthContext);

  // logout functionality
  const handleLogout = () => {
    signOutUser().then().catch();
  };


  const roleRef = useRef();
  const { matchedUser, refetch } = GetSpecificUsers();

  // handle for role define
  const handleRoleDefine = async () => {
    const selectedRole = roleRef?.current?.value;
    // console.log(selectedRole);

    // if you are admin, don't post job
    // if (matchedUser?.role === "admin") {
    //   replace("/");
    //   toast.error("You are admin");
    //   return;
    // }

    // console.log("hello");
    if (selectedRole === "HR") {
      // update HR role to db
      const updateUserData = {
        name: matchedUser.name,
        email: matchedUser.email,
        photo: matchedUser.photo ? matchedUser.photo : "",
        role: "hr",
      };
      // console.log(updateUserData);

      const res = await fetch(`/api/users/${matchedUser._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateUserData),
      });


      if (res.ok) {
        refetch();
        // console.log("user made hr");
      }
    }

    if (selectedRole === "Seeker") {
      // update Seeker role to db
      const updateUserData = {
        name: matchedUser.name,
        email: matchedUser.email,
        photo: matchedUser.photo ? matchedUser.photo : "",
        role: "seeker",
      };
      // console.log(updateUserData);

      const res = await fetch(`/api/users/${matchedUser._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateUserData),
      });

      if (res.ok) {
        refetch();
        console.log("user made seeker");
      }
    }
  };

  return (
    <div className="bg-blue-50 w-full fixed z-30 top-0">
      <header className="container mx-auto">
        <nav className="py-1 max-w-screen-3xl">
          {/* Desktop part */}
          <div className="flex items-center justify-between h-full px-4 w-full">
            <Link href="/">
              <Image
                width={140}
                height={40}
                className="cursor-pointer rounded-md"
                src="https://i.ibb.co/ZMxRfGL/job-Linker-Logo.png"
                alt=""
              />
            </Link>
            <div className="text-white hidden sm:flex">
              <ul className="hidden sm:flex text-black items-center">
                <li
                  onClick={() => setMenuOpen(false)}
                  className={styles.navLinks}
                >
                  <Link
                    href="/"
                    className="text-sm font-semibold cursor-pointer ease-out duration-300 hover:text-base hover:font-bold"
                  >
                    Home
                  </Link>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className={styles.navLinks}
                >
                  <Link
                    href="/employers"
                    className="text-sm font-semibold cursor-pointer ease-out duration-300 hover:text-base hover:font-bold"
                  >
                    Employers
                  </Link>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className={styles.navLinks}
                >
                  <Link
                    href="/candidates"
                    className="text-sm font-semibold cursor-pointer ease-out duration-300 hover:text-base hover:font-bold"
                  >
                    Candidates
                  </Link>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className={styles.navLinks}
                >
                  <Link
                    href="/blogs"
                    className="text-sm font-semibold cursor-pointer ease-out duration-300 hover:text-base hover:font-bold"
                  >
                    Blogs
                  </Link>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className={styles.navLinks}
                >
                  <Link
                    href="/about"
                    className="text-sm font-semibold cursor-pointer ease-out duration-300 hover:text-base hover:font-bold"
                  >
                    About
                  </Link>
                </li>

                {/*  */}
                {matchedUser?.role === "hr" ||
                matchedUser?.role === "seeker" ? (
                  <li
                    onClick={() => setMenuOpen(false)}
                    className={styles.navLinks}
                  >
                    <Link
                      href={matchedUser?.role === "hr" ? "/hr" : "/seekersForm"}
                      className="text-sm font-semibold cursor-pointer ease-out duration-300 hover:text-base hover:font-bold"
                    >
                      Post-Job
                    </Link>
                  </li>
                ) : (
                  ""
                )}

                {/* modal */}
                {matchedUser?.role === "admin" ||
                matchedUser?.role === "hr" ||
                matchedUser?.role === "seeker"
                  ? ""
                  : user && (
                      <li
                        onClick={() => setMenuOpen(false)}
                        className={styles.navLinks}
                      >
                        <p
                          onClick={() => window.my_modal_3.showModal()}
                          className="text-sm font-semibold cursor-pointer ease-out duration-300 hover:text-base hover:font-bold"
                        >
                          Post
                        </p>
                        <dialog id="my_modal_3" className="modal">
                          <div className="modal-box p-12">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>
                            <h3 className="font-bold text-lg">Post Job As a</h3>
                            <div>
                              <select
                                className="w-full p-2 rounded border-[1px] border-black"
                                name="forRole"
                                ref={roleRef}
                                onChange={handleRoleDefine}
                              >
                                <option disabled selected>
                                  Pick One
                                </option>
                                <option>HR</option>
                                <option>Seeker</option>
                              </select>
                            </div>
                            <div className="mt-3 text-center">
                              <Link
                                href={
                                  matchedUser?.role === "hr"
                                    ? "/hr"
                                    : "/seekersForm"
                                }
                              >
                                <button className="btn bg-[#40e1f9] px-10 py-3 rounded-lg text-white hover:bg-transparent hover:text-[#40e1f9] hover:font-extrabold hover:border-y-2 hover:border-x-2 hover:border-[#40e1f9] ease-out duration-300">
                                  GO
                                </button>
                              </Link>
                            </div>
                          </div>
                        </dialog>
                      </li>
                    )}

                {/* 
                <li
                  onClick={() => setMenuOpen(false)}
                  className={styles.navLinks}
                >
                  <Link
                    href="/hr"
                    className="text-sm font-semibold cursor-pointer ease-out duration-300 hover:text-base hover:font-bold"
                  >
                    HR
                  </Link>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className={styles.navLinks}
                >
                  <Link
                    href="/seekersForm"
                    className="text-sm font-semibold cursor-pointer ease-out duration-300 hover:text-base hover:font-bold"
                  >
                    Seekers
                  </Link>
                </li>
                 */}

                {/* lg */}
                <li className="flex items-center space-x-5 text-[#F68519]ml-10">
                  {user ? (
                    <div className="dropdown dropdown-end dropdown-hover">
                      <Image
                        height={45}
                        width={45}
                        className="rounded-full mr-3"
                        src={user?.photoURL || defaultImg}
                        alt=""
                      />
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu py-3 px-4 shadow rounded-box w-52 text-[#40e1f9] font-bold bg-white"
                      >
                        <li>
                          <Link
                            href="/"
                            className="flex items-center justify-center"
                          >
                            My Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/dashboard"
                            className="flex items-center justify-center"
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/"
                            className="flex items-center justify-center"
                          >
                            Applied Jobs
                          </Link>
                        </li>
                        <li>
                          <h3
                            onClick={handleLogout}
                            className="cursor-pointer ease-out duration-300 text-sm font-semibold flex items-center bg-[#40e1f9] text-white px-3 py-2 rounded-xl justify-center hover:text-white hover:bg-black"
                          >
                            Logout <FiLogIn className="text-xl ms-1" />
                          </h3>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <Link href="/login">
                      <h3 className="cursor-pointer ease-out duration-300 text-sm font-semibold flex items-center bg-[#40e1f9] text-white px-3 py-2 rounded-xl  text-center hover:bg-transparent hover:text-[#40e1f9] hover:font-extrabold hover:border-y-2 hover:border-x-2 hover:border-[#40e1f9] hover:text-lg">
                        Login{" "}
                        <FiLogIn className="text-xl ms-1 hover:text-2xl" />
                      </h3>
                    </Link>
                  )}
                </li>
              </ul>
            </div>

            {/* sm */}
            <div className="sm:hidden cursor-pointer pl-24 flex">
              {user ? (
                <div className="dropdown dropdown-end">
                  <Image
                    tabIndex={0}
                    height={45}
                    width={45}
                    className="rounded-full mr-3"
                    src={user?.photoURL || defaultImg}
                    alt=""
                  />
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu py-3 px-4 shadow rounded-box w-52 font-bold bg-white"
                  >
                    <li>
                      <Link
                        href="/"
                        className="flex items-center justify-center"
                      >
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="flex items-center justify-center"
                      >
                        Applied Jobs
                      </Link>
                    </li>
                    <li>
                      <h3
                        onClick={handleLogout}
                        className="cursor-pointer ease-out duration-300 text-sm font-semibold flex items-center bg-[#40e1f9] text-white px-3 py-2 rounded-xl justify-center hover:text-white hover:bg-black"
                      >
                        Logout <FiLogIn className="text-xl ms-1" />
                      </h3>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              <div
                onClick={toggleMenu}
                className="flex items-center justify-center"
              >
                <BiMenuAltRight className="w-9 h-9 text-black ms-1 " />
              </div>
            </div>
          </div>

          {/* dashboard for small device interface */}
          <div
            className={
              menuOpen
                ? "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-indigo-50 p-10 ease-in-out duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
            }
          >
            {/* cross sine */}
            <div className="flex w-full items-center justify-between">
              <div>
                <Link href="/">
                  <Image
                    width={140}
                    height={40}
                    className="cursor-pointer rounded-md"
                    src="https://i.ibb.co/ZMxRfGL/job-Linker-Logo.png"
                    alt=""
                  />
                </Link>
              </div>
              <div onClick={toggleMenu} className="cursor-pointer">
                <IoMdCloseCircleOutline className="h-8 w-8 text-black" />
              </div>
            </div>

            {/* mobile device menu */}
            <div className="flex-col py-4 font-semibold text-gray-500">
              <ul>
                <li className="py-4 hover:underline">
                  <Link href="/">Home</Link>
                </li>
                <li className="py-4 hover:underline">
                  <Link href="">Dashboard</Link>
                </li>
                <li className="py-4 hover:underline">
                  <Link href="/employers">Employers</Link>
                </li>
                <li className="py-4 hover:underline">
                  <Link href="/candidates">Candidates</Link>
                </li>
                <li className="py-4 hover:underline">
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li className="py-4 hover:underline">
                  <Link href="/about">About</Link>
                </li>
                <li className="py-4 hover:underline">
                  <Link href="/hr">HR</Link>
                </li>
                <li className="py-4 hover:underline">
                  <Link href="/seekersForm">Seekers</Link>
                </li>
                {/* mobile device options */}
                <div className="flex items-center py-4">
                  {user ? (
                    <li>
                      <h3
                        onClick={handleLogout}
                        className="cursor-pointer ease-out duration-300 text-sm font-semibold flex items-center bg-[#40e1f9] text-white px-20 py-2 rounded-xl"
                      >
                        Logout <FiLogIn className="text-xl ms-1" />
                      </h3>
                    </li>
                  ) : (
                    <li>
                      <Link href="/login">
                        <h3 className="cursor-pointer ease-out duration-300 text-sm font-semibold flex items-center bg-[#40e1f9] text-white px-20 py-2 rounded-xl">
                          Login <FiLogIn className="text-xl ms-1" />
                        </h3>
                      </Link>
                    </li>
                  )}
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
