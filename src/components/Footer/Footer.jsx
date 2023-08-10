import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto bg-black text-white mt-10">
      <div className="text-center max-w-7xl mx-auto pt-8">
        <h2 className="font-bold text-2xl">Social Media Links</h2>
        <div className="pt-5 pb-6">
          <hr className="lg:w-[40%] w-[80%] mx-auto text-black" />
        </div>
        {/* Social Media Links section start */}
        <div className="flex max-w-xl mx-auto text-base pb-8">
          <a href="" className="ms-auto">
            Facebook
          </a>
          <a href="" className="mx-auto">
            Git Hub
          </a>
          <a href="" className="me-auto">
            Linkedin
          </a>
        </div>
        {/* Social Media Links section end */}
      </div>
      <div className="text-center bg-blue-500 py-4 font-bold text-base">
        <small>Copyright © 2023 - Job Linker All rights reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
