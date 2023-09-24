"use client";

import { AuthContext } from '@/provider/AuthProvider';
import Image from 'next/image';
import { useContext, useEffect, useState } from "react";
import { MdEditNote } from 'react-icons/md';
import defaultImg from "@/asserts/profile.png";
import toast from 'react-hot-toast';
import Loading from '@/components/Shared/Loading/Loading';

const Profile = () => {
    // user come from AuthContext
    const { user } = useContext(AuthContext);
    const [profileInfos, setProfileInfos] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const profileInfoData = async () => {
        try {
            const response = await fetch("/api/profileinfo");
            const data = await response.json();
            setProfileInfos(data);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        profileInfoData();
    }, []);
    // console.log(profileInfos);


    const matchedUserWithArray = profileInfos?.filter(
        (info) => info?.email === user?.email
    );

    // if (!user || isLoading) {
    //     // use a loading please...
    //     if (isLoading) {
    //         <Loading />
    //     }
    // }

    const matchedProfileData = matchedUserWithArray[0];


    const handleUserInfo = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const country = form.country.value;
        const education = form.education.value;

        const userProfileData = {
            name: user?.displayName || name,
            email: user.email,
            phone,
            address,
            country,
            education,
        }
        // console.log(userProfileData);

        // send users data to db
        const userInfoToDb = async (userProfileData) => {
            try {
                const response = await fetch("/api/profileinfo", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(userProfileData),
                });

                if (response.ok) {
                    toast.success("Profile update successfully completed.");
                    profileInfoData();
                }
            } catch (error) {
                toast.error(error.message);
            }
        };

        userInfoToDb(userProfileData);

    }
    console.log(matchedProfileData);
    return (
        <div
            className='container mx-auto pt-16'>
            {/* header section stat */}
            <div>
                <h2
                    className='text-center text-3xl font-bold mt-3'>
                    My Profile
                </h2>
                <p
                    className='text-xs text-center font-semibold mt-3 text-gray-500'>
                    <MdEditNote className='text-2xl' />  Edit Your Profile Here & Save It
                </p>
            </div>
            {/* header section end */}

            {/* main section start */}
            <div
                className='grid grid-cols-12 mt-6 mb-10'>

                <div
                    className='col-span-12 lg:col-span-4 bg-indigo-50 rounded-lg mx-4 h-fit'>
                    <div
                        className='flex items-center justify-center mt-6'>
                        <Image
                            width={140}
                            height={140}
                            quality={100}
                            priority={true}
                            className='rounded-full'
                            src={user?.photoURL || defaultImg}
                            alt="" />
                    </div>
                    <div
                        className='flex items-center justify-center mt-4 mb-2'>
                        <button
                            type="file"
                            className='bg-[#40e1f9] rounded-lg text-white ease-out duration-300 w-fit px-5 py-2 cursor-pointer font-medium'>
                            Edit Photo
                        </button>
                        {/* <input
                            name='photo'
                            type="file" /> */}
                    </div>
                    <div
                        className='flex items-center justify-center mt-2'>
                        <p
                            className='text-xl font-semibold px-3 rounded-full mb-1'>
                            Name: {user?.displayName || "Anonymous"}
                        </p>
                    </div>
                    <div
                        className='flex items-center justify-center'>
                        <p
                            className='text-sm font-semibold mt-1 mb-3 text-gray-500'>
                            Email: {user?.email || "Anonymous"}
                        </p>
                    </div>
                    <p
                        className='text-xs font-medium text-center text-red-700 mb-4'>
                        (You cannot be changed Name & Email)
                    </p>
                </div>

                {
                    matchedProfileData?.phone ?
                        <>
                            <div
                                className='col-span-12 lg:col-span-8 lg:grid lg:grid-cols-2 mx-10 my-4'>
                                <div
                                    className='col-span-2 flex text-2xl'>
                                    <h2
                                        className='font-semibold text-blue-400'>
                                        Your Additional Info
                                    </h2>
                                </div>
                                <h2
                                    className='font-semibold my-5 lg:my-0'>
                                    Name: {matchedProfileData.name}
                                </h2>

                                <h2
                                    className='font-semibold my-5 lg:my-0'>
                                    Email: {matchedProfileData.email}
                                </h2>
                                <h2
                                    className='font-semibold my-5 lg:my-0'>
                                    Phone: {matchedProfileData.phone}
                                </h2>
                                <h2
                                    className='font-semibold my-5 lg:my-0'>
                                    Address: {matchedProfileData.address}
                                </h2>
                                <h2
                                    className='font-semibold my-5 lg:my-0'>
                                    Country: {matchedProfileData.country}
                                </h2>
                                <h2
                                    className='font-semibold my-5 lg:my-0'>
                                    Education: {matchedProfileData.education}
                                </h2>
                                <h2
                                    className='font-semibold text-xs text-gray-500'>
                                    User ID: {matchedProfileData._id}
                                </h2>
                            </div>
                        </>
                        :
                        <>
                            {
                                isLoading ?
                                    <div
                                        className='flex items-center justify-center'><Loading />
                                    </div>
                                    :
                                    <div
                                        className='col-span-8 bg-indigo-50 me-4 rounded-lg'>
                                        <div
                                            className='text-center text-2xl font-medium mt-4'>
                                            Your Addition Information
                                        </div>
                                        {/* form section start */}
                                        <form
                                            className="font-bold mt-6 pb-6"
                                            onSubmit={handleUserInfo}>
                                            <div
                                                className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span
                                                            className="label-text">
                                                            * Name (Name cannot be changed)
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name='name'
                                                        placeholder="Add Your Name"
                                                        defaultValue={user?.displayName || ""}
                                                        className="input input-bordered text-gray-400"
                                                        required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span
                                                            className="label-text">
                                                            * Email Address (Email Address cannot be changed)
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        defaultValue={user?.email || "Anonymous"}
                                                        className="input input-bordered text-gray-400"
                                                        required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span
                                                            className="label-text">
                                                            * Phone Number
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="phone"
                                                        placeholder="Add Your Phone Number"
                                                        // defaultValue={phone}
                                                        className="input input-bordered"
                                                        required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span
                                                            className="label-text">
                                                            * Address
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        placeholder="Add Your Address"
                                                        className="input input-bordered"
                                                        // defaultValue={address || "or"}
                                                        required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span
                                                            className="label-text">
                                                            * Your Country
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="country"
                                                        placeholder="Add Your Country"
                                                        className="input input-bordered"
                                                        // defaultValue={address || "or"}
                                                        required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span
                                                            className="label-text">
                                                            * Education Background
                                                        </span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="education"
                                                        placeholder="Add Your Education"
                                                        className="input input-bordered"
                                                        // defaultValue={address || "or"}
                                                        required />
                                                </div>
                                            </div>
                                            <div
                                                className="form-control mt-6 lg:mx-0 mx-4">
                                                <input
                                                    className="bg-[#40e1f9] rounded-lg cursor-pointer text-white ease-out duration-300 mt-3 py-3 mx-4"
                                                    type="submit"
                                                    value="Save Your Info" />
                                            </div>
                                        </form>
                                    </div>
                            }
                        </>
                }


            </div>
        </div>
    );
};

export default Profile;