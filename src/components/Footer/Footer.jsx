import React from "react";
import { FaFacebookF, FaInstagram, FaSnapchatSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="bg-black text-white">
      {/* footer section */}
      <div
        className='w-[95%] mx-auto py-20'>
        <div
          className='font-bold'>
          <div
            className='grid lg:grid-cols-4 px-16'>
            <div
              className='text-[#6c757d] text-end'>
              <small>
                Chef Taylor Bondsman, working in
                <br />
                collaboration with Head Chef Marguerite
                <br />
                Keogh, offer elegant & playful modern
                <br />
                British cooking. . .
              </small>
              <br />
              <small
                className='flex items-center mt-24'>
                {/* @ ALL RIGHTS RESERVED BY <span className='text-yellow-500 ms-1'> */}
                @ ALL RIGHTS RESERVED BY <span className='text-[#40e1f9] ms-1'>
                  JOB LINKER</span>
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
                className='text-[#40e1f9] mb-4'>
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
                  className='text-[#40e1f9]'>
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
