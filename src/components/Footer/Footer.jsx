import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-gradient-to-r from-cyan-50 to-blue-100">
      {/* footer section */}
      <div
        className='container mx-auto pt-20 pb-10'>
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
                {/* facebook */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 20 20">
                  <path
                    fill="#1877f2"
                    d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z" />
                </svg>

                {/* twitter */}
                <svg
                  className="mx-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 256 256">
                  <g
                    fill="none">
                    <rect
                      width="256"
                      height="256"
                      fill="#fff"
                      rx="60" />
                    <rect
                      width="256"
                      height="256"
                      fill="#1D9BF0"
                      rx="60" />
                    <path
                      fill="#fff"
                      d="M199.572 91.411c.11 1.587.11 3.174.11 4.776c0 48.797-37.148 105.075-105.075 105.075v-.03A104.54 104.54 0 0 1 38 184.677c2.918.351 5.85.526 8.79.533a74.154 74.154 0 0 0 45.864-15.839a36.976 36.976 0 0 1-34.5-25.645a36.811 36.811 0 0 0 16.672-.636c-17.228-3.481-29.623-18.618-29.623-36.198v-.468a36.705 36.705 0 0 0 16.76 4.622c-16.226-10.845-21.228-32.432-11.43-49.31a104.814 104.814 0 0 0 76.111 38.582a36.95 36.95 0 0 1 10.683-35.283c14.874-13.982 38.267-13.265 52.249 1.601a74.105 74.105 0 0 0 23.451-8.965a37.061 37.061 0 0 1-16.234 20.424A73.446 73.446 0 0 0 218 72.282a75.023 75.023 0 0 1-18.428 19.13Z" />
                  </g>
                </svg>

                {/* instagram */}
                <svg
                  className="mr-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 256 256">
                  <g
                    fill="none">
                    <rect
                      width="256"
                      height="256"
                      fill="url(#skillIconsInstagram0)"
                      rx="60" />
                    <rect
                      width="256"
                      height="256"
                      fill="url(#skillIconsInstagram1)"
                      rx="60" />
                    <path
                      fill="#fff"
                      d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604h.031Zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563v.025Zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12v.004Zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355h.002Zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334Z" />
                    <defs>
                      <radialGradient
                        id="skillIconsInstagram0"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                        gradientUnits="userSpaceOnUse">
                        <stop
                          stopColor="#FD5" />
                        <stop
                          offset=".1"
                          stopColor="#FD5" />
                        <stop
                          offset=".5"
                          stopColor="#FF543E" />
                        <stop
                          offset="1"
                          stopColor="#C837AB" />
                      </radialGradient>
                      <radialGradient
                        id="skillIconsInstagram1"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                        gradientUnits="userSpaceOnUse">
                        <stop
                          stopColor="#3771C8" />
                        <stop
                          offset=".128"
                          stopColor="#3771C8" />
                        <stop
                          offset="1"
                          stopColor="#60F"
                          stopOpacity="0" />
                      </radialGradient>
                    </defs>
                  </g>
                </svg>

                {/* linkedin */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 256 256">
                  <g
                    fill="none">
                    <rect
                      width="256"
                      height="256"
                      fill="#fff"
                      rx="60" />
                    <rect
                      width="256"
                      height="256"
                      fill="#0A66C2"
                      rx="60" />
                    <path
                      fill="#fff"
                      d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z" />
                  </g>
                </svg>
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
