'use client'
import BannerComponent from "@/components/Shared/BannerComponent/BannerComponent";
import { AuthContext } from "@/provider/AuthProvider";
import Image from "next/image";
import { useContext } from "react";
import defaultImg from "@/asserts/profile.png";
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";



const BlogsPage = () => {
    const { user } = useContext(AuthContext);
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
                                alt=''
                            />
                            <p onClick={() => document.getElementById('my_modal_7').showModal()} className="px-6 py-3 bg-indigo-50 w-full rounded-full font-semibold text-gray-500 flex items-center gap-2"> <FiEdit className="text-xl" /> Write A Blog</p>
                        </div>
                        {/* social div */}
                        <div className="bg-indigo-50 rounded-xl px-7 py-3  mb-7 mt-5">
                            <div
                                className="my-5 flex justify-between">
                                <p
                                    className="font-semibold">
                                    Social Media
                                </p>
                                <p
                                    className="flex gap-2 cursor-pointer">
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
                                <input type="text" placeholder="Your Name" className="input input-bordered w-full py-8" />
                                {/* email */}
                                <input type="email" placeholder="Email Address" className="input input-bordered w-full my-3 py-8" />
                                {/* text area */}
                                <textarea className="textarea textarea-bordered w-full h-40" placeholder="Message"></textarea>

                                <button className="btn bg-[#40e1f9] px-10 p-3 rounded-lg text-white hover:bg-transparent hover:text-[#40e1f9] hover:font-extrabold hover:border-y-2 hover:border-x-2 hover:border-[#40e1f9] ease-out duration-300 mt-3 w-full">Send Message</button>
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
                <div>
                    <dialog id="my_modal_7" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                                {/* text area */}
                                <h2 className='text-2xl text-center font-semibold my-2'>Write A Blog</h2>
                                <hr />
                                <div>
                                    {/* img name */}
                                    <div className="flex items-center gap-2 my-3">
                                        <Image
                                            width={35}
                                            height={35}
                                            src={user?.photoURL || defaultImg}
                                            className="rounded-full"
                                            alt=''
                                        />

                                        <p className="font-semibold text-lg my-1">{user?.displayName || "John Doe"}</p>

                                    </div>
                                    {/* img name */}
                                    {/*blog title  */}
                                    <div className="form-control w-full ">
                                        <label className="label">
                                            <span className="label-text font-medium">Blog Title*</span>

                                        </label>
                                        <input type="text" placeholder="Blog Title" className="input input-bordered w-full" />

                                    </div>

                                    {/* file */}
                                    <div className="form-control w-full max-w-xs my-2">
                                        <label className="label">
                                            <span className="label-text font-medium">Select Image*</span>

                                        </label>
                                        <input type="file" className="file-input file-input-bordered w-full" />

                                    </div>
                                </div>
                                {/* text area */}
                                <div className='mt-5'>
                                    <h2 className="font-medium label-text">Blog Description*</h2>
                                </div>
                                <div className="my-2">
                                    <textarea placeholder="What's on your mind?" className="textarea textarea-bordered textarea-md w-full" ></textarea>
                                </div>
                                {/* text area */}
                                {/* button */}
                                <div className='text-center w-full'>
                                    <button className='btn w-full bg-[#40e1f9] rounded-lg text-white hover:bg-transparent hover:text-[#40e1f9] hover:font-extrabold hover:border-y-2 hover:border-x-2 hover:border-[#40e1f9] ease-out duration-300 mt-5'>Post Blog</button>
                                </div>

                            </form>
                        </div>
                    </dialog>
                </div>
                {/* modal */}
            </div>
        </div>
    );
};

export default BlogsPage;