"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { BsList, BsX, BsYoutube } from "react-icons/bs";
import { AuthContext } from "@/provider/AuthProvider";
import { FiLogIn } from "react-icons/fi";

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
          <Link href="/">
            <Image
              width={140}
              height={40}
              className="cursor-pointer rounded-md"
              src="https://i.ibb.co/d79G4T9/crop-logo.png"
              alt="picture of author"
            ></Image>
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
                  className="text-sm font-semibold">
                  Home
                </Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className={styles.navLinks}>
                <Link
                  href="/employers"
                  className="text-sm font-semibold">
                  Employers
                </Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className={styles.navLinks}>
                <Link
                  href="/candidates"
                  className="text-sm font-semibold">
                  Candidates
                </Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className={styles.navLinks}>
                <Link
                  href="/blogs"
                  className="text-sm font-semibold">
                  Blogs
                </Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className={styles.navLinks}>
                <Link
                  href="/about"
                  className="text-sm font-semibold">
                  About
                </Link>
              </li>

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
                          src={user?.photoURL || ''}
                          alt=""
                        ></Image>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-52 text-[#40e1f9] font-bold">
                          <li>
                            <Link
                              href="/">
                              My Profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/">
                              Applied Jobs
                            </Link>
                          </li>
                          <li>
                            <h3
                              onClick={handleLogout}
                              className="cursor-pointer ease-out duration-300 text-sm font-semibold flex items-center bg-[#40e1f9] text-white px-3 py-2 rounded-xl">
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
                          className="cursor-pointer ease-out duration-300 text-sm font-semibold flex items-center bg-[#40e1f9] text-white px-3 py-2 rounded-xl">
                          Login <FiLogIn className="text-xl ms-1" />
                        </h3>
                      </Link>
                    )
                }
              </li>
            </ul>
          </div>
          {/* Mobile Menu */}

          <div
            onClick={toggleMenu}
            className="sm:hidden cursor-pointer pl-24">
            <BsList
              className="w-8 h-8 
            text-[#F68519]" />
          </div>
        </div>

        {/* dashboard for small device interface */}
        <div
          className=
          {
            menuOpen ?
              "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500"
              :
              "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
          } >
          {/* cross sine */}
          <div
            className="flex w-full items-center justify-end">
            <div
              onClick={toggleMenu}
              className="cursor-pointer">
              <BsX className="h-8 w-8 text-[#F68519]" />
            </div>
          </div>

          {/* mobile device menu */}
          <div
            className="flex-col py-4">
            <ul>
              <li
                className="py-4 hover:underline hover:duration-[#F68519]">
                <Link
                  href="/">
                  Home
                </Link>
              </li>
              <li
                className="py-4 hover:underline hover:duration-[#F68519]">
                <Link
                  href="">
                  Dashboard
                </Link>
              </li>
              <li
                className="py-4 hover:underline hover:duration-[#F68519]">
                <Link
                  href="/employers">
                  Employers
                </Link>
              </li>
              <li
                className="py-4 hover:underline hover:duration-[#F68519]">
                <Link
                  href="/candidates">
                  Candidates
                </Link>
              </li>
              <li
                className="py-4 hover:underline hover:duration-[#F68519]">
                <Link
                  href="/blogs">
                  Blogs
                </Link>
              </li>
              <li
                className="py-4 hover:underline hover:duration-[#F68519]">
                <Link
                  href="/about">
                  About
                </Link>
              </li>
              <li
                className="flex items-center py-4 text-[#F68519]">
                <Link
                  href="/login">
                  <p
                    className="cursor-pointer px-4 py-1 rounded-full bg-[#40e1f9] block text-black hover:bg-black hover:text-[#F68519] ease-in-out duration-300">
                    Login
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          {/* Social media links */}
          <div
            className="flex flex-row justify-around pt-10 items-center">
            <Link
              href="">
              <BsYoutube
                size={30}
                className="cursor-pointer hover:text-[#F68519] ease-in-out duration-300" />
            </Link>
          </div>

          {/* small device pictures */}
          <Image
            src="https://i.ibb.co/jzBmL7w/jhkf.png"
            alt="picture of author"
            width={135}
            height={75}
            style={{ borderRadius: "100px 0 100px 0" }}
            className="cursor-pointer pt-10 mx-auto"
          ></Image>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
