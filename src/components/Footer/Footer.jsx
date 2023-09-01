import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaSnapchatSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="bg-gradient-to-r from-cyan-50 to-blue-100">
      {/* footer section */}
      <div
        className='w-[95%] mx-auto pt-20 pb-10'>
        <div
          className='font-bold'>
          <div
            className='grid lg:grid-cols-4 px-16'>
            <div
              className='text-[#6c757d] text-end'>
              <Image
                width={140}
                height={40}
                className="cursor-pointer rounded-md flex items-start justify-start mb-2"
                src="https://i.ibb.co/ZMxRfGL/job-Linker-Logo.png"
                alt="" />
              <small>
                We do care for our client and this site
                <br />
                is for those who want hire anyone or
                <br />
                any seeker who can find their desire job
                <br />
                Get your Goal. . .
              </small>
            </div>

            <div
              className='text-end'>
              <div>
                <small>
                  HOME
                </small>
                <br />
                <small>
                  MENU
                </small>
                <br />
                <small>
                  RESERVATION
                </small>
                <br />
                <small>
                  SHOP
                </small>
                <br />
                <small>
                  NEWS
                </small>
                <br />
                <small>
                  CONTACT
                </small>
              </div>
            </div>
            <div
              className='text-end'>
              <p
                // className='text-yellow-500 mb-4'>
                className='text-black font-bold mb-4'>
                ONLINE RESERVATION
              </p>
              <p
                className='text-[#6c757d]'>
                FOLLOW
              </p>
              {/* footer icons start */}
              <div
                className="mt-4 mb-2">
                <FaFacebookF className="text-lg mx-5" />
                <FaTwitter className="text-lg mx-5" />
                <FaInstagram className="text-lg mx-5" />
                <FaSnapchatSquare className="text-lg ms-5" />
              </div>
              {/* footer icons end */}
            </div>
            <div
              className='text-end'>
              <div
                className='text-[#6c757d]'>
                <small
                  // className='text-yellow-500'>
                  className='font-extrabold text-black'>
                  + 1 2345 6789 1234
                </small>
                <br />
                <small>
                  JOBLINKER@GMAIL.COM
                </small>
                <br />
                <small>
                  49 GULSHAN Street
                </small>
                <br />
                <small>
                  DHAKA
                </small>
                <br />
                <small>
                  EC1Y 8SY
                </small>
                <br />
                <small>
                  BANGLADESH
                </small>
              </div>
            </div>
          </div>
          <small
            className='flex justify-center mt-14'>
            {/* @ ALL RIGHTS RESERVED BY <span className='text-yellow-500 ms-1'> */}
            @ ALL RIGHTS RESERVED BY <span className='font-extrabold ms-1'>
              JOB LINKER</span>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
