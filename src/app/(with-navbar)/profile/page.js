"use client";

import { AuthContext } from '@/provider/AuthProvider';
import Image from 'next/image';
import { useContext, useState } from "react";
import { MdEditNote } from 'react-icons/md';

const Profile = () => {

    // user come from AuthContext
    const { user } = useContext(AuthContext);

    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState('Initial Value');

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        // You can handle saving the edited value to your backend or perform any other actions here
    };

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
                    className='col-span-4 bg-indigo-50 rounded-lg mx-4 h-fit'>
                    <div
                        className='flex items-center justify-center mt-6'>
                        <Image
                            width={140}
                            height={140}
                            quality={100}
                            priority={true}
                            className='rounded-full'
                            src={user?.photoURL}
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
                            Name: {user?.displayName}
                        </p>
                    </div>
                    <div
                        className='flex items-center justify-center'>
                        <p
                            className='text-sm font-semibold mt-1 mb-3 text-gray-500'>
                            Email: {user?.email}
                        </p>
                    </div>
                    <p
                        className='text-xs font-medium text-center text-red-700 mb-4'>
                        (You cannot be changed Name & Email)
                    </p>
                </div>

                <div
                    className='col-span-8 bg-indigo-50 me-4 rounded-lg'>
                    <div
                        className='text-center text-2xl font-medium mt-4'>
                        Your Addition Information
                    </div>
                    {/* form section start */}
                    <form
                        className="font-bold mt-6 pb-6"
                    // onSubmit={handleUpdate}
                    >
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
                                    readOnly
                                    placeholder="Add Your Name"
                                    defaultValue={user?.displayName || "Anonymous"}
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
                                    defaultValue={user?.email}
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
                        </div>
                        <div
                            className="form-control mt-6 lg:mx-0 mx-4">
                            <input
                                className="bg-[#40e1f9] rounded-lg text-white ease-out duration-300 mt-3 py-3 mx-4"
                                type="submit"
                                value="Save Your Info" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;