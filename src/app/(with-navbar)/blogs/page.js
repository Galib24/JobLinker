"use client";

import BannerComponent from "@/components/Shared/BannerComponent/BannerComponent";
import { AuthContext } from "@/provider/AuthProvider";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { BsFilterLeft } from "react-icons/bs";
import { RiAlignCenter } from "react-icons/ri";
import defaultImg from "@/asserts/profile.png";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { useQuery } from "react-query";

const img_hosting_tkn = "a272d7fb3d5b5ee711a07f62d1b2c93f";

const BlogsPage = () => {
  const { user } = useContext(AuthContext);

  // get blogs data from db
  const {
    data: blogs = [],
    refetch,
    isLoading,
  } = useQuery({
    queryFn: async () => {
      const res = await axios("/api/blogs");
      return res.data;
    },
  });
  console.log(blogs);

  // img hosting url link
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_tkn}`;

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { blogTitle, blogDetails } = data;

    // take out logo to host in imgBB
    const formData = new FormData();
    formData.append("image", data.blogPhoto[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const blogPhoto = imgRes.data.display_url;

          const newBlogPhoto = {
            blogTitle,
            blogDetails,
            blogPhoto,
          };

          // send hr job to db
          blogPostToDb(newBlogPhoto);
        }
      });

    // function to post data to database
    const blogPostToDb = async (newBlogPhoto) => {
      try {
        const response = await fetch("/api/blogs", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newBlogPhoto),
        });

        if (response.ok) {
          toast.success("Your blog has been submitted.");
          refetch();
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
  };

  return (
    <div>
      <div>
        {/* header div */}
        <div className="bg-indigo-50">
          <BannerComponent headingTitle="Blog Post" pageName="Blog" />
        </div>
        {/* header div */}

        {/* body */}
        <div className="w-[95%] mx-auto grid grid-cols-12 mt-14 mb-20">
          {/* card */}
          <div className="col-span-8 mx-6">
            {/* card container */}
            <div className="card w-full bg-base-300 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            {/* card container */}
          </div>
          {/* card */}

          {/* others */}
          <div className="w-full col-span-4 mx-4">
            <div className="flex gap-2 items-center pb-3 cursor-pointer">
              <Image
                width={50}
                height={50}
                src={user?.photoURL || defaultImg}
                className="rounded-full"
                alt=""
              />
              <p
                onClick={() =>
                  document.getElementById("my_modal_7").showModal()
                }
                className="px-6 py-3 bg-indigo-50 w-full rounded-full font-semibold text-gray-500 flex items-center gap-2"
              >
                <FiEdit className="text-xl" /> Write A Blog
              </p>
            </div>

            {/* modal */}
            <div>
              <dialog id="my_modal_7" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  {/* text editor */}
                  <h2 className="text-2xl text-center font-semibold my-2">
                    Write A Blog
                  </h2>
                  <hr />
                  <div>
                    {/* img name */}
                    <div className="flex items-center gap-2 my-3">
                      <Image
                        width={35}
                        height={35}
                        src={user?.photoURL || defaultImg}
                        className="rounded-full"
                        alt=""
                      />

                      <p className="font-semibold text-lg">
                        {user?.displayName || "John Doe"}
                      </p>
                    </div>
                    {/* img name */}
                  </div>

                  {/* react hook form for getting data */}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Blog Title Field */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">
                          Blog Title*
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="blog title"
                        {...register("blogTitle", {
                          required: true,
                        })}
                        className="w-full p-2 rounded border-[1px] border-black"
                      />
                    </div>

                    {/* Blog Photo */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold">
                          Blog Photo*
                        </span>
                      </label>
                      <input
                        type="file"
                        placeholder="blog photo"
                        {...register("blogPhoto", {
                          required: true,
                        })}
                        className="w-full p-2 rounded"
                      />
                    </div>

                    {/* Blog description Field */}
                    <div className="form-control flex flex-col mt-2">
                      <label className="label">
                        <span className="label-text font-semibold">
                          Job Description*
                        </span>
                      </label>
                      <textarea
                        id=""
                        cols="30"
                        rows="4"
                        {...register("blogDetails", { required: true })}
                        className="bg-transparent border-[1px] p-2 rounded border-black"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center my-10">
                      <input
                        className="btn bg-[#40e1f9] px-10 p-2 rounded-lg text-white hover:bg-transparent hover:text-[#40e1f9] hover:font-extrabold hover:border-y-2 hover:border-x-2 hover:border-[#40e1f9] ease-out duration-300"
                        type="submit"
                        value="Post Blog"
                      />
                    </div>
                  </form>
                </div>
              </dialog>
            </div>

            {/* social div */}
            <div className="bg-indigo-50 rounded-xl px-7 py-3  mb-7 mt-5">
              <div className="my-5 flex justify-between">
                <p className="font-semibold">Social Media</p>
                <p className="flex gap-2 cursor-pointer">
                  <BiLogoFacebook className="text-2xl text-gray-600 hover:text-pink-500 duration-300" />
                  <BiLogoInstagram className="text-2xl text-gray-600 hover:text-pink-500 duration-300" />
                  <BiLogoTwitter className="text-2xl text-gray-600 hover:text-pink-500 duration-300" />
                  <BiLogoLinkedin className="text-2xl text-gray-600 hover:text-pink-500 duration-300" />
                </p>
              </div>
            </div>
            {/* social div */}

            {/* contact Div */}
            <div className="bg-indigo-50 rounded-xl px-7 py-3  mb-7 text-xl">
              <h2 className="text-xl font-semibold mt-4">Contact Us</h2>
              {/* form */}
              <div className="mx-auto mt-5 mb-3 ">
                {/* name */}
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full py-8"
                />
                {/* email */}
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full my-3 py-8"
                />
                {/* text area */}
                <textarea
                  className="textarea textarea-bordered w-full h-40"
                  placeholder="Message"
                ></textarea>

                <button className="btn bg-[#40e1f9] px-10 p-3 rounded-lg text-white hover:bg-transparent hover:text-[#40e1f9] hover:font-extrabold hover:border-y-2 hover:border-x-2 hover:border-[#40e1f9] ease-out duration-300 mt-3 w-full">
                  Send Message
                </button>
              </div>
              {/* form */}
            </div>
            {/* contact Div */}
          </div>
          {/* others */}
        </div>
        {/* body */}

        {/* email img and input form */}

        {/* modal */}
      </div>
    </div>
  );
};

export default BlogsPage;
