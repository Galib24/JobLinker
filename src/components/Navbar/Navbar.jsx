"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { AuthContext } from "@/provider/AuthProvider";
import { FiLogIn } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import defaultImg from "@/asserts/profile.png";

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

  return (
    <header
      className="container max-w-full fixed z-30 top-0 ">
      <nav
        className="w-full py-1 bg-blue-50">
        {/* Desktop part */}
        <div
          className="flex items-center justify-between h-full px-4 w-full">
          <Link
            href="/">
            <Image
              width={140}
              height={40}
              className="cursor-pointer rounded-md"
              src="https://i.ibb.co/d79G4T9/crop-logo.png"
              alt="" />
          </Link>
          <div
            className="text-white hidden sm:flex">
            <ul
              className="hidden sm:flex text-black items-center">
              <li
                onClick={() => setMenuOpen(false)}
                className={styles.navLinks}>
                <Link
                  href="/"
                  className="text-sm font-semibold cursor-pointer ease-out duration-300 hover:text-base hover:font-bold">
                  Home
                </Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className={styles.navLinks}>
                <Link
                  href="/employers"
                  className="text-sm font-semibold cursor-pointer ease-out duration-300 hover:text-base hover:font-bold">
                  Employers
                </Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className={styles.navLinks}>
                <Link
                  href="/candidates"
                  className="text-sm font-semibold cursor-pointer ease-out duration-300 hover:text-base hover:font-bold">
                  Candidates
                </Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className={styles.navLinks}>
                <Link
                  href="/blogs"
                  className="text-sm font-semibold cursor-pointer ease-out duration-300 hover:text-base hover:font-bold">
                  Blogs
                </Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className={styles.navLinks}>
                <Link
                  href="/about"
                  className="text-sm font-semibold cursor-pointer ease-out duration-300 hover:text-base hover:font-bold">
                  About
                </Link>
              </li>
              <li
                className="py-4 hover:underline">
                <Link
                  href="/hr">
                  HR
                </Link>
              </li>
              {/* lg */}
              <li
                className="flex items-center space-x-5 text-[#F68519]ml-10">
                {
                  user ?
                    (
                      <div
                        className="dropdown dropdown-end dropdown-hover">
                        <Image
                          height={45}
                          width={45}
                          className="rounded-full mr-3"
                          src={user?.photoURL || defaultImg}
                          alt="" />
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu py-3 px-4 shadow rounded-box w-52 text-[#40e1f9] font-bold bg-white">
                          <li>
                            <Link
                              href="/"
                              className="flex items-center justify-center">
                              My Profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/dashboard"
                              className="flex items-center justify-center">
                              Dashboard
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/"
                              className="flex items-center justify-center">
                              Applied Jobs
                            </Link>
                          </li>
                          <li>
                            <h3
                              onClick={handleLogout}
                              className="cursor-pointer ease-out duration-300 text-sm font-semibold flex items-center bg-[#40e1f9] text-white px-3 py-2 rounded-xl justify-center hover:text-white hover:bg-black">
                              Logout <FiLogIn className="text-xl ms-1" />
                            </h3>
                          </li>
                        </ul>
                      </div>
                    )
                    :
                    (
                      <Link
                        href="/login">
                        <h3
                          className="cursor-pointer ease-out duration-300 text-sm font-semibold flex items-center bg-[#40e1f9] text-white px-3 py-2 rounded-xl  text-center hover:bg-transparent hover:text-[#40e1f9] hover:font-extrabold hover:border-y-2 hover:border-x-2 hover:border-[#40e1f9] hover:text-lg">
                          Login <FiLogIn className="text-xl ms-1 hover:text-2xl" />
                        </h3>
                      </Link>
                    )
                }
              </li>
            </ul>
          </div>

          {/* sm */}
          <div
            className="sm:hidden cursor-pointer pl-24 flex">
            {
              user ?
                (
                  <div
                    className="dropdown dropdown-end">
                    <Image
                      tabIndex={0}
                      height={45}
                      width={45}
                      className="rounded-full mr-3"
                      src={user?.photoURL || defaultImg}
                      alt="" />
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu py-3 px-4 shadow rounded-box w-52 font-bold bg-white">
                      <li>
                        <Link
                          href="/"
                          className="flex items-center justify-center">
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/"
                          className="flex items-center justify-center">
                          Applied Jobs
                        </Link>
                      </li>
                      <li>
                        <h3
                          onClick={handleLogout}
                          className="cursor-pointer ease-out duration-300 text-sm font-semibold flex items-center bg-[#40e1f9] text-white px-3 py-2 rounded-xl justify-center hover:text-white hover:bg-black">
                          Logout <FiLogIn className="text-xl ms-1" />
                        </h3>
                      </li>
                    </ul>
                  </div>
                )
                :
                (
                  ""
                )
            }
            <div
              onClick={toggleMenu}
              className="flex items-center justify-center">
              <BiMenuAltRight
                className="w-9 h-9 text-black ms-1 " />
            </div>
          </div>
        </div>

        {/* dashboard for small device interface */}
        <div
          className=
          {
            menuOpen ?
              "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-indigo-50 p-10 ease-in-out duration-500"
              :
              "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
          }>
          {/* cross sine */}
          <div
            className="flex w-full items-center justify-between">
            <div>
              <h2
                className="text-3xl font-extrabold text-black px-2 py-1 rounded-xl">
                Job Linker<span
                  className="text-xs">@</span>
              </h2>
            </div>
            <div
              onClick={toggleMenu}
              className="cursor-pointer">
              <IoMdCloseCircleOutline className="h-8 w-8 text-black" />
            </div>
          </div>

          {/* mobile device menu */}
          <div
            className="flex-col py-4 font-semibold text-gray-500">
            <ul>
              <li
                className="py-4 hover:underline">
                <Link
                  href="/">
                  Home
                </Link>
              </li>
              <li
                className="py-4 hover:underline">
                <Link
                  href="">
                  Dashboard
                </Link>
              </li>
              <li
                className="py-4 hover:underline">
                <Link
                  href="/employers">
                  Employers
                </Link>
              </li>
              <li
                className="py-4 hover:underline">
                <Link
                  href="/candidates">
                  Candidates
                </Link>
              </li>
              <li
                className="py-4 hover:underline">
                <Link
                  href="/blogs">
                  Blogs
                </Link>
              </li>
              <li
                className="py-4 hover:underline">
                <Link
                  href="/about">
                  About
                </Link>
              </li>
              <li
                className="py-4 hover:underline">
                <Link
                  href="/hr">
                  HR
                </Link>
              </li>
              {/* mobile device options */}
              <div
                className="flex items-center py-4">
                {
                  user ?
                    (
                      <li>
                        <h3
                          onClick={handleLogout}
                          className="cursor-pointer ease-out duration-300 text-sm font-semibold flex items-center bg-[#40e1f9] text-white px-20 py-2 rounded-xl">
                          Logout <FiLogIn className="text-xl ms-1" />
                        </h3>
                      </li>
                    )
                    :
                    (
                      <li>
                        <Link
                          href="/login">
                          <h3
                            className="cursor-pointer ease-out duration-300 text-sm font-semibold flex items-center bg-[#40e1f9] text-white px-20 py-2 rounded-xl">
                            Login <FiLogIn className="text-xl ms-1" />
                          </h3>
                        </Link>
                      </li>
                    )
                }
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
