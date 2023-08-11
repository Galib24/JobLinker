"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BsList, BsX, BsYoutube } from "react-icons/bs";

const styles = {
  navLinks:
    " ml-3 uppercase border-0 mr-10 border-white hover:border-[#F68519] text-xl ",
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="container max-w-full fixed  z-0 top-0 ">
      <nav className="w-full h-24 shadow-xl bg-white">
        {/* Desktop part */}
        <div className="flex items-center justify-between h-full px-4 w-full">
          <Link href="/">
            <Image
              src="https://i.ibb.co/d79G4T9/crop-logo.png"
              alt="picture of author"
              width={140}
              height={40}
              // style={{ borderRadius: "10px 50px 50px 10px" }}
              className="cursor-pointer rounded"
            ></Image>
          </Link>
          <div className="text-white hidden sm:flex">
            <ul className="hidden sm:flex text-black">
              <li
                onClick={() => setMenuOpen(false)}
                className={styles.navLinks}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className={styles.navLinks}
              >
                <Link href="/employers">Employers</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className={styles.navLinks}
              >
                <Link href="/candidates">Candidates</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className={styles.navLinks}
              >
                <Link href="/blogs">Blogs</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className={styles.navLinks}
              >
                <Link href="/about">About</Link>
              </li>

              <li className="flex items-center space-x-5 text-[#F68519]ml-10">
                <h3 className="cursor-pointer border-[#40e1f9] px-4 py-1 rounded-full bg-[#40e1f9] text-black hover:bg-black hover:text-[#F68519] ease-out duration-300">
                  Login
                </h3>
              </li>
            </ul>
          </div>
          {/* Mobile Menu */}

          <div onClick={toggleMenu} className="sm:hidden cursor-pointer pl-24">
            <BsList className="w-8 h-8 text-[#F68519]"></BsList>
          </div>
        </div>

        {/* dashboard for small device interface */}
        <div
          className={
            menuOpen
              ? "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
          }
        >
          {/* cross sine */}
          <div className="flex w-full items-center justify-end">
            <div onClick={toggleMenu} className="cursor-pointer">
              <BsX className="h-8 w-8 text-[#F68519]"></BsX>
            </div>
          </div>

          {/* mobile device menu */}
          <div className="flex-col py-4">
            <ul>
              <li className="py-4 hover:underline hover:duration-[#F68519]">
                <Link href="/">Home</Link>
              </li>
              <li className="py-4 hover:underline hover:duration-[#F68519]">
                <Link href="">Dashboard</Link>
              </li>
              <li className="py-4 hover:underline hover:duration-[#F68519]">
                <Link href="/employers">Employers</Link>
              </li>
              <li className="py-4 hover:underline hover:duration-[#F68519]">
                <Link href="/candidates">Candidates</Link>
              </li>
              <li className="py-4 hover:underline hover:duration-[#F68519]">
                <Link href="/blogs">Blogs</Link>
              </li>
              <li className="py-4 hover:underline hover:duration-[#F68519]">
                <Link href="/about">About</Link>
              </li>
              <li className="flex items-center py-4 text-[#F68519]">
                <p className="cursor-pointer px-4 py-1 rounded-full bg-[#40e1f9] block text-black hover:bg-black hover:text-[#F68519] ease-in-out duration-300">
                  Login
                </p>
              </li>
            </ul>
          </div>
          {/* Social media links */}
          <div className="flex flex-row justify-around pt-10 items-center">
            <Link href="">
              <BsYoutube
                size={30}
                className="cursor-pointer hover:text-[#F68519] ease-in-out duration-300"
              ></BsYoutube>
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
